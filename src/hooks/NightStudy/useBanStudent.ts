import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCreateBanMutation, useDeleteBanMutation } from "queries/ManageNightStudy/manageNightstudy.query";
import { QUERY_KEYS } from "queries/queryKey";
import { useQueryClient } from "react-query";
import { NightStudyBanParams } from "repositories/ManageNightStudy/manageNightStudy.param";

const useBanStudent = () => {
  const queryClient = useQueryClient();
  const createBanMutation = useCreateBanMutation();
  const deleteBanMutation = useDeleteBanMutation();

  const createBan = (params: NightStudyBanParams) => {
    createBanMutation.mutate(params, {
      onSuccess: () => {
        B1ndToast.showSuccess("정지 성공")
        queryClient.invalidateQueries(
          QUERY_KEYS.manageNightStudy.getBanMember,
        )
      }
    })
  }

  const deleteBan = (id: number) => {
    deleteBanMutation.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("정지 해제 성공")
        queryClient.invalidateQueries(
          QUERY_KEYS.manageNightStudy.getBanMember,
        )
      }
    })
  }

  return {
    createBan,
    deleteBan,
  }
}

export default useBanStudent