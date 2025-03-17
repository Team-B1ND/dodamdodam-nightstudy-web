import { useState, ChangeEvent, KeyboardEvent } from "react";
import dateTransform from "../../utils/Transform/dateTransform";
import { PLACE_ITEMS } from "../../constants/NightStudy/nightStudy.constant";
import { ApplyNightStudyPram } from "../../repositories/NightStudy/nightstudy.param";
import { Place } from "../../types/Place/place.type";
import { useQueryClient } from "react-query";
import { useApplyNightStudyMutation } from "../../queries/NightStudy/nightstudy.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const useApplyNightStudy = () => {
  const queryClient = useQueryClient();
  const applyNightStudyMutation = useApplyNightStudyMutation();
  const [enabled, setEnabled] = useState(true);
  const [placeData, setPlaceData] = useState<Place[]>(PLACE_ITEMS);
  const [applyNightStudyData, setApplyNightStudyData] =
    useState<ApplyNightStudyPram>({
      // place: "", 추후에 서버에서 추가되면 사용할 예정
      content: "",
      doNeedPhone: false,
      reasonForPhone: "",
      startAt: dateTransform.hyphen(),
      endAt: dateTransform.hyphen(),
    });

  console.log(applyNightStudyData);

  // datePicker date 변경 함수 && startAt, endAt 값 변경 함수
  const handleChangeDate = (e: Date, scope: "start" | "end") => {
    if (scope === "start") {
      setApplyNightStudyData((prev) => ({
        ...prev,
        startAt: dateTransform.hyphen(e),
      }));
    } else {
      setApplyNightStudyData((prev) => ({
        ...prev,
        endAt: dateTransform.hyphen(e),
      }));
    }
  };

  // doNeedPhone, place 값 변경 함수
  const handleChangeCheckBox = (
    type: "place" | "doNeedPhone",
    placeName?: string
  ) => {
    if (type === "place") {
      setPlaceData((prev) =>
        prev.map((place) => ({ ...place, isAtv: place.name === placeName }))
      );
      // setApplyNightStudyData((prev) => ({ ...prev, place: placeName! })); 추후에 서버에서 추가되면 사용할 예정
    } else {
      setApplyNightStudyData((prev) => ({
        ...prev,
        doNeedPhone: !prev.doNeedPhone,
      }));
    }
  };

  // content, reasonForPhone 값 변경 함수
  const handleChangeTextArea = (
    e: ChangeEvent<HTMLTextAreaElement>,
    type: "content" | "reasonForPhone"
  ) => {
    setApplyNightStudyData((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitNightStudy();
    }
  };

  const handleSubmitNightStudy = () => {
    if (!enabled) return;

    const content = applyNightStudyData.content;
    if (content.length < 10 || content.length > 250) {
      B1ndToast.showError("학습 내용은 10자 이상 250자 이하여야 합니다.");
      return;
    }
    setEnabled(false);

    applyNightStudyMutation.mutate(applyNightStudyData, {
      onSuccess: () => {
        queryClient.invalidateQueries("night-study/my");
        B1ndToast.showSuccess("심자 신청 성공");
        setEnabled(true);
      },
      onError: () => {
        B1ndToast.showError("심자 신청 실패");
        setEnabled(true);
      },
    });
  };

  return {
    placeData,
    applyNightStudyData,
    handleChangeDate,
    handleChangeCheckBox,
    handleChangeTextArea,
    handleKeyDown,
    handleSubmitNightStudy,
  };
};
