import { useMutation } from "react-query";
import applyRepository from "../../repositories/Apply/apply.repository";
import { Apply } from "../../types/Apply/apply.type";

export const useApplyLatenight = () => {
  const mutation = useMutation(
    ({ content, endAt, isPhone, placeId, reason, startAt }: Apply) =>
      applyRepository.ApplyLatenight({
        content,
        endAt,
        isPhone,
        placeId,
        reason,
        startAt,
      })
  );
  return mutation;
};
