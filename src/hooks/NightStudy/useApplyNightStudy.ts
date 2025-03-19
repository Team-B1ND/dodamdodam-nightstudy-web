import { useState, ChangeEvent, KeyboardEvent } from "react";
import dateTransform from "src/utils/Transform/dateTransform";
import { PLACE_ITEMS } from "src/constants/NightStudy/nightStudy.constant";
import { ApplyNightStudyPram } from "src/repositories/NightStudy/nightstudy.param";
import { Place } from "src/types/Place/place.type";
import { useQueryClient } from "react-query";
import { useApplyNightStudyMutation } from "src/queries/NightStudy/nightstudy.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import errorHandler from "src/utils/Error/errorHandler";
import { QUERY_KEYS } from "src/queries/queryKey";

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
        queryClient.invalidateQueries(QUERY_KEYS.nightStudy.getMyNightStudy);
        B1ndToast.showSuccess("심자 신청에 성공하였습니다.");
        setEnabled(true);
      },
      onError: (error) => {
        const errorAxios = error as AxiosError;
        errorHandler.applyNightStudy(errorAxios);
        setEnabled(true);
      },
    });
  };

  return {
    enabled,
    placeData,
    applyNightStudyData,
    handleChangeDate,
    handleChangeCheckBox,
    handleChangeTextArea,
    handleKeyDown,
    handleSubmitNightStudy,
  };
};
