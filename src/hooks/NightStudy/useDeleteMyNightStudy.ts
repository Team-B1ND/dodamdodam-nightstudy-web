import { useQueryClient } from "react-query";
import { useDeleteMyNightStudyMutation } from "../../queries/NightStudy/nightstudy.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useState } from "react";
import { AxiosError } from "axios";
import errorHandler from "../../utils/Error/errorHandler";

const useDeleteMyNightStudy = () => {
  const queryClient = useQueryClient();
  const deleteMyNightStudyMutation = useDeleteMyNightStudyMutation();
  const [loading, setLoading] = useState(false);

  const handleClickDelete = (id: number) => {
    if (loading) return;
    setLoading(true);

    deleteMyNightStudyMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries("night-study/my");
        B1ndToast.showSuccess("내 심자 삭제에 성공하였습니다");
        setLoading(false);
      },
      onError: (error) => {
        const errorAxios = error as AxiosError;
        errorHandler.deleteMyNightStudy(errorAxios);
        setLoading(false);
      },
    });
  };

  return {
    handleClickDelete,
  };
};

export default useDeleteMyNightStudy;
