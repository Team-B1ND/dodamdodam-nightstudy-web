import { useQueryClient } from "react-query";
import { useDeleteMyLateNightsQuery } from "../../queries/LateNight/latenight.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

interface Props {
  id: number;
}

const useDeleteAppy = () => {
  const queryClient = useQueryClient();

  const useDeleteMyLateNight = useDeleteMyLateNightsQuery();

  const onDeletePost = ({ id }: Props) => {
    const confirm = window.confirm("내 심자를 삭제하시겠습니까");

    if (!confirm) {
      return;
    }
    useDeleteMyLateNight.mutateAsync(
      {
        id,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("심자가 삭제되었습니다");
          queryClient.invalidateQueries("myLateNight/getMyLateNight");
        },
        onError: () => {
          B1ndToast.showSuccess("심자 삭제를 실패하였습니다잇!");
        },
      }
    );
  };

  return { onDeletePost };
};

export default useDeleteAppy;
