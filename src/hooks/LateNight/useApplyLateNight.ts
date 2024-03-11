import { ChangeEvent, FormEvent, useState } from "react";
import { Apply } from "../../types/Apply/apply.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import * as Sentry from "@sentry/react";
import { useQueryClient } from "react-query";
import { useApplyLatenightMutation } from "../../queries/LateNight/latenight.query";
import { tr } from "date-fns/locale";

const useApplyLateNight = () => {
  const queryClient = useQueryClient();
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  const minDate = currentDate.toISOString().split("T")[0];

  const [maxDate, setMaxDate] = useState("");
  const [postData, setPostData] = useState<Apply>({
    place: "",
    content: "",
    doNeedPhone: false,
    reasonForPhone: "",
    endAt: "",
    startAt: "",
  });

  console.log(postData.place);

  const applyLatenightMutation = useApplyLatenightMutation();

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
    const newDate = new Date(startDateObj.getTime() + 11232e5);
    setMaxDate(newDate.toISOString().slice(0, 10));
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //학습내용
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeReason = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //휴대폰사용이유
    if (postData.doNeedPhone === false) {
      B1ndToast.showInfo("사용 여부를 체크해주세요");
      return;
    }
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const checkOnlyOne = (e: ChangeEvent<HTMLInputElement>) => {
    //다중 체크박스 제어
    const { name, value } = e.target;
    let checkItem = document.getElementsByName("place");
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

    const { content, endAt, doNeedPhone, place, reasonForPhone, startAt } =
      postData;

    const handleStartDate = startAt;
    const handleEndDate = endAt;

    if (startAt === "") {
      B1ndToast.showInfo("시작일을 작성해주세요");
      return;
    }

    if (endAt === "") {
      B1ndToast.showInfo("종료일을 작성해주세요");
      return;
    }

    if (place === null) {
      B1ndToast.showInfo("학습 장소를 선택해주세요");
      return;
    }

    if (doNeedPhone === true && reasonForPhone === "") {
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
        doNeedPhone,
        place,
        reasonForPhone,
        endAt: handleEndDate,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("제출되었습니다.");
          queryClient.invalidateQueries("/night-study/my");
          setPostData({
            content: "",
            endAt: "",
            doNeedPhone: true,
            place: "",
            reasonForPhone: "",
            startAt: "",
          });
        },
        onError: (error: any) => {
          console.log(error);

          B1ndToast.showError("심자 신청 실패");
          Sentry.captureException(`${error}이유로 심자 신청 실패`);
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

export default useApplyLateNight;
