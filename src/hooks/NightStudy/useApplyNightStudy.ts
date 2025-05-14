import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import dateTransform from "utils/Transform/dateTransform";
import { PLACE_ITEMS } from "constants/NightStudy/nightStudy.constant";
import { ApplyNightStudyParam, ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";
import { Place } from "types/Place/place.type";
import { useQueryClient } from "react-query";
import { useApplyNightStudyMutation, useApplyProjectNightStudyMutation } from "queries/NightStudy/nightstudy.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import errorHandler from "utils/Error/errorHandler";
import { QUERY_KEYS } from "queries/queryKey";
import { nightStudyProjectRoom } from "types/Apply/apply.type";
import dayjs from "dayjs";

export const useApplyNightStudy = (isPersonalPage : boolean) => {
  const queryClient = useQueryClient();
  const applyNightStudyMutation = useApplyNightStudyMutation();
  const applyProjcetNightStudyMutation = useApplyProjectNightStudyMutation();

  const [enabled, setEnabled] = useState(true);
  const [placeData, setPlaceData] = useState<Place[]>(PLACE_ITEMS);
  const [applyNightStudyData, setApplyNightStudyData] =
    useState<ApplyNightStudyParam | ApplyProjectNightStudyParam>(
      isPersonalPage ? {
        content: "",
        doNeedPhone: false,
        reasonForPhone: "",
        startAt: dateTransform.hyphen(),
        endAt: dateTransform.hyphen(),
      } : {
        type: "NIGHT_STUDY_PROJECT_1",
        startAt: dateTransform.hyphen(dayjs().add(1, 'day').toDate()),
        endAt: dateTransform.hyphen(dayjs().add(1, 'day').toDate()),
        room: null,
        name: "",
        description: "",
        students: [],
      }
  );



  const checkApplyNightStudy = (
    props: ApplyNightStudyParam | ApplyProjectNightStudyParam
  ): props is ApplyNightStudyParam => {
    return "doNeedPhone" in props;
  };

  useEffect(() => {
    resetNightStudyContent();
  }, [isPersonalPage])

  const resetNightStudyContent = () => {
    setApplyNightStudyData(isPersonalPage ? {
      content: "",
      doNeedPhone: false,
      reasonForPhone: "",
      startAt: dateTransform.hyphen(),
      endAt: dateTransform.hyphen(),
    } : {
      type: "NIGHT_STUDY_PROJECT_1",
      startAt: dateTransform.hyphen(dayjs().add(1, 'day').toDate()),
      endAt: dateTransform.hyphen(dayjs().add(1, 'day').toDate()),
      room: null,
      name: "",
      description: "",
      students: [],
    });
    setPlaceData(PLACE_ITEMS)
  }

  // 프로젝트 인원 선택 함수
  const handleProjectMember = (id : number) => {
    setApplyNightStudyData((prev) => {
      if (!checkApplyNightStudy(prev)) {
        if (prev.students.includes(id)) return {...prev, students:prev.students.filter((member) => member !== id)}
        return {...prev, students:[...prev.students, id]}
      }
      return prev
    })
  }

  // 프로젝트 심자 시간 변경 함수
  const handleProjectType = (type : string) => {
    setApplyNightStudyData((prev) => (
      { ...prev,
        type: type === "심자 1"
        ? "NIGHT_STUDY_PROJECT_1"
        : "NIGHT_STUDY_PROJECT_2" }
      )
    )
  }

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
    placeName?: nightStudyProjectRoom
  ) => {
    if (type === "place") {
      setPlaceData((prev) =>
        prev.map((place) => ({ ...place, isAtv: place.name === placeName }))
      );
      setApplyNightStudyData((prev) => ({ ...prev, room: placeName! }));
    } else {
      setApplyNightStudyData((prev) => (
        checkApplyNightStudy(prev)
        ? { ...prev, doNeedPhone: !prev.doNeedPhone }
        : prev
      ));
    }
  };

  // content, reasonForPhone 값 변경 함수
  const handleChangeTextArea = (
    e: ChangeEvent<HTMLTextAreaElement>,
    type: "content" | "reasonForPhone" | "description" | "name"
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

    const content = checkApplyNightStudy(applyNightStudyData)
      ? applyNightStudyData.content
      : applyNightStudyData.description;

    if (content.length < 10 || content.length > 250) {
      B1ndToast.showError("학습 내용은 10자 이상 250자 이하여야 합니다.");
      return;
    }
    setEnabled(false);

    if (checkApplyNightStudy(applyNightStudyData)) {
      // 일반 심자
      applyNightStudyMutation.mutate(applyNightStudyData as ApplyNightStudyParam, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.nightStudy.getMyNightStudy);
          B1ndToast.showSuccess("심자 신청에 성공하였습니다.");
          setEnabled(true);
          resetNightStudyContent();
        },
        onError: (error) => {
          const errorAxios = error as AxiosError;
          errorHandler.applyNightStudy(errorAxios);
          setEnabled(true);
        },
      });
    } else {
      // 프로젝트 심자
      applyProjcetNightStudyMutation.mutate(applyNightStudyData as ApplyProjectNightStudyParam, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.nightStudy.getMyProjectNightStudy);
          B1ndToast.showSuccess("심자 신청에 성공하였습니다.");
          setEnabled(true);
          resetNightStudyContent();
        },
        onError: (error) => {
          const errorAxios = error as AxiosError;
          errorHandler.applyNightStudy(errorAxios);
          setEnabled(true);
        },
      });
    }
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
    checkApplyNightStudy,
    handleProjectType,
    handleProjectMember,
  };
};
