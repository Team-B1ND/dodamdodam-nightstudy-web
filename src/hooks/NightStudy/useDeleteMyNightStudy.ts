import { useQueryClient } from "react-query";
import { useDeleteMyNightStudyMutation } from "../../queries/NightStudy/nightstudy.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useState } from "react";

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
        B1ndToast.showSuccess("내 심자 삭제 성공");
        setLoading(false);
      },
      onError: () => {
        B1ndToast.showError("내 심자 삭제 실패");
        setLoading(false);
      },
    });
  };

  return {
    handleClickDelete,
  };
};

export default useDeleteMyNightStudy;
