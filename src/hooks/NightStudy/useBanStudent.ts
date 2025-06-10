import { B1ndToast } from "@b1nd/b1nd-toastify";
import dayjs from "dayjs";
import { useCreateBanMutation, useDeleteBanMutation } from "queries/ManageNightStudy/manageNightstudy.query";
import { QUERY_KEYS } from "queries/queryKey";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { NightStudyBanParams } from "repositories/ManageNightStudy/manageNightStudy.param";

interface NightStudyBanState {
  ended: string,
  reasonType: string,
  reason: string
}

const useBanStudent = () => {
  const [ended, setEnded] = useState(dayjs().format("YYYY-MM-DD"));
  const [reasonType, setReasonType] = useState("");
  const [reason, setReason] = useState("");
  const state: NightStudyBanState = {ended, reasonType, reason};
  const queryClient = useQueryClient();
  const createBanMutation = useCreateBanMutation();
  const deleteBanMutation = useDeleteBanMutation();

  const createBan = (params: NightStudyBanParams) => {
    createBanMutation.mutate(params, {
      onSuccess: () => {
        B1ndToast.showSuccess("정지 성공")
        return queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getBanMember,]
        )
      }
    })
  }

  const deleteBan = (id: number) => {
    deleteBanMutation.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("정지 해제 성공")
        return queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getBanMember,]
        )
      }
    })
  }

  return {
    state,
    setEnded,
    setReason,
    setReasonType,
    createBan,
    deleteBan,
  }
}

export default useBanStudent