import { useQueryClient } from "react-query";

import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeleteMyNightStudyMutation } from "../../queries/NightStudy/nightstudy.query";

interface Props {
  id: number;
}

const useDeleteNightStudy = () => {
  const queryClient = useQueryClient();

  const deleteMyNightStudy = useDeleteMyNightStudyMutation();

  const onDeletePost = ({ id }: Props) => {
    const confirm = window.confirm("내 심자를 삭제하시겠습니까");

    if (confirm) {
      deleteMyNightStudy.mutate(
        {
          id,
        },
        {
          onSuccess: () => {
            B1ndToast.showSuccess("심자가 삭제되었습니다");
            queryClient.invalidateQueries("/night-study/my");
          },
          onError: () => {
            B1ndToast.showSuccess("심자 삭제를 실패하였습니다잇!");
          },
        }
      );
    }
  };

  return { onDeletePost };
};

export default useDeleteNightStudy;
