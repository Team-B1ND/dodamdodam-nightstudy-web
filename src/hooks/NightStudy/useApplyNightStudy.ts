import { ChangeEvent, FormEvent, useState } from "react";
import { Apply } from "../../types/Apply/apply.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";
// import * as Sentry from "@sentry/react";
import { useQueryClient } from "react-query";
import { useApplyNightStudyMutation } from "../../queries/NightStudy/nightstudy.query";
import dayjs from "dayjs";
import { AxiosError } from "axios";

const useApplyNightStudy = () => {
  const queryClient = useQueryClient();
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  const minDate = currentDate.toISOString().split("T")[0];

  const [maxDate, setMaxDate] = useState("");
  const [postData, setPostData] = useState<Apply>({
    
    content: "",
    doNeedPhone: false,
    reasonForPhone: "",
    endAt: "",
    startAt: "",
  });

  const [prevReasonForPhone, setPrevReasonForPhone] = useState("");

  const applyNightStudyMutation = useApplyNightStudyMutation();

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
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };


  const onChangePhoneCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //휴대폰 필요여부 체크
    const { name, checked } = e.target;
    if (checked) {
      setPostData((prev) => ({
        ...prev,
        reasonForPhone: prevReasonForPhone,
        [name]: true,
      }));
    } else {
      setPrevReasonForPhone(postData.reasonForPhone);
      setPostData((prev) => ({ ...prev, reasonForPhone: "", [name]: false }));
    }
  };

  const onSubmitNightStudy = (e: FormEvent) => {
    e.preventDefault();

    const { content, endAt, doNeedPhone, reasonForPhone, startAt } =
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

    if (dayjs(startAt).isAfter(endAt)) {
      B1ndToast.showInfo("시작일을 종료일보다 작아야합니다");
      return;
    }

    // if (place === "") {
    //   B1ndToast.showInfo("학습 장소를 선택해주세요");
    //   return;
    // }

    if (doNeedPhone === true && reasonForPhone.trim() === "") {
      B1ndToast.showInfo("휴대폰 사용 이유를 작성해주세요");
      return;
    }

    if (content.trim() === "") {
      B1ndToast.showInfo("학습내용을 작성해주세요");
      return;
    }

    if (content.length < 10) {
      return B1ndToast.showInfo("학습 내용을 10자 이상 작성하세요");
    }

    if (content.length > 250) {
      return B1ndToast.showInfo("학습 내용을 250자 내로 작성하세요");
    }

    applyNightStudyMutation.mutate(
      {
        content,
        startAt: handleStartDate,
        doNeedPhone,
        reasonForPhone,
        endAt: handleEndDate,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("심야자습을 신청하였습니다.");
          queryClient.invalidateQueries("/night-study/my");
          setPostData({
            content: "",
            endAt: "",
            doNeedPhone: true,
            reasonForPhone: "",
            startAt: "",
          });
        },
        onError: (error) => {
          const errorStatus = error as AxiosError;

          if (errorStatus.response?.status === 403) {
            return B1ndToast.showError("심야자습 신청 시간이 아닙니다!");
          }
          else if (errorStatus.response?.status === 409) {
            return B1ndToast.showError("이미 신청한 심자가 있습니다");
          }

          B1ndToast.showError("심야자습 신청을 실패했습니다.");
          // Sentry.captureException(`${error}이유로 심자 신청 실패`);
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
    onChangeContent,
    onChangeReason,
    onChangePhoneCheck,
    onSubmitNightStudy,
  };
};

export default useApplyNightStudy;
