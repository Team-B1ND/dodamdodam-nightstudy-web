import { ChangeEvent, FormEvent, useState } from "react";
import { useApplyLatenight } from "../../queries/Apply/apply.query";
import { Apply } from "../../types/Apply/apply.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";

const useApply = () => {
  const minDate = new Date().toISOString().split("T")[0];
  const [maxDate, setMaxDate] = useState("");
  const [postData, setPostData] = useState<Apply>({
    placeId: 0,
    content: "",
    endAt: "",
    isPhone: false,
    reason: "",
    startAt: "",
  });
  const applyLatenightMutation = useApplyLatenight();

  const onChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
    addTwoWeeks(value);
  };

  const onChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (postData.startAt === "") {
      B1ndToast.showInfo("시작일을 먼저 선택해주세요");
      return;
    }
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const addTwoWeeks = (date: string) => {
    const startDateObj = new Date(date);
    const newDate = new Date(startDateObj.getTime() + 12096e5);
    setMaxDate(newDate.toISOString().slice(0, 10));
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //학습내용
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeReason = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //휴대폰사용이유
    if (postData.isPhone === false) {
      B1ndToast.showInfo("사용 여부를 체크해주세요");
      return;
    }
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const checkOnlyOne = (e: ChangeEvent<HTMLInputElement>) => {
    //다중 체크박스 제어
    const { name, value } = e.target;
    let checkItem = document.getElementsByName("placeId");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangePhoneCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //휴대폰 필요여부 체크
    const { name, checked } = e.target;
    if (checked) {
      setPostData((prev) => ({ ...prev, [name]: true }));
    } else {
      setPostData((prev) => ({ ...prev, [name]: false }));
    }
  };

  const onSubmitLatenight = (e: FormEvent) => {
    e.preventDefault();

    const { content, endAt, isPhone, placeId, reason, startAt } = postData;
    const handleStartDate = startAt + "T00:00:00";
    const handleEndDate = endAt + "T23:59:59";

    if (startAt === "") {
      B1ndToast.showInfo("시작일을 작성해주세요");
      return;
    }

    if (endAt === "") {
      B1ndToast.showInfo("종료일을 작성해주세요");
      return;
    }

    if (placeId === null) {
      B1ndToast.showInfo("학습 장소를 선택해주세요");
      return;
    }

    if (isPhone === true && reason === "") {
      B1ndToast.showInfo("휴대폰 사용 이유를 작성해주세요");
      return;
    }
    if (content === "") {
      B1ndToast.showInfo("학습내용을 작성해주세요");
      return;
    }

    applyLatenightMutation.mutate(
      {
        content,
        startAt: handleStartDate,
        isPhone,
        placeId,
        reason,
        endAt: handleEndDate,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("제출되었습니다.");
          setPostData({
            content: "",
            endAt: "",
            isPhone: true,
            placeId: 0,
            reason: "",
            startAt: "",
          });
        },
        onError: () => {
          B1ndToast.showError("제출실패");
        },
      }
    );
  };

  return {
    postData,
    minDate,
    maxDate,
    onChangeStartDate,
    onChangeEndDate,
    checkOnlyOne,
    onChangeContent,
    onChangeReason,
    onChangePhoneCheck,
    onSubmitLatenight,
  };
};

export default useApply;
