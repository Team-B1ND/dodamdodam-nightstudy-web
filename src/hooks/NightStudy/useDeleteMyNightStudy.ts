import { useQueryClient } from "react-query";
import { useDeleteMyNightStudyMutation, useDeleteMyProjcetNightStudyMutation } from "queries/NightStudy/nightstudy.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useState } from "react";
import { AxiosError } from "axios";
import errorHandler from "utils/Error/errorHandler";
import { QUERY_KEYS } from "queries/queryKey";

const useDeleteMyNightStudy = () => {
  const queryClient = useQueryClient();
  const deleteMyNightStudyMutation = useDeleteMyNightStudyMutation();
  const deleteMyProjectNightStudyMutation = useDeleteMyProjcetNightStudyMutation();
  const [loading, setLoading] = useState(false);

  const handleClickDelete = (id: number, type: "PERSONAL" | "PROJECT") => {
    if (loading) return;
    setLoading(true);
    if (type === "PERSONAL") {
      deleteMyNightStudyMutation.mutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.nightStudy.getMyNightStudy);
          B1ndToast.showSuccess("내 심자 삭제에 성공하였습니다");
          setLoading(false);
        },
        onError: (error) => {
          const errorAxios = error as AxiosError;
          errorHandler.deleteMyNightStudy(errorAxios);
          setLoading(false);
        },
      });
    } else {
      deleteMyProjectNightStudyMutation.mutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.nightStudy.getMyProjectNightStudy);
          B1ndToast.showSuccess("내 심자 삭제에 성공하였습니다");
          setLoading(false);
        },
        onError: (error) => {
          const errorAxios = error as AxiosError;
          errorHandler.deleteMyProjcetNightStudy(errorAxios);
          setLoading(false);
        },
      });
    }
  };

  return {
    handleClickDelete,
  };
};

export default useDeleteMyNightStudy;
