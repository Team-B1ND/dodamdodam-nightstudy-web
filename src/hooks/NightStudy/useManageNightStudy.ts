import { B1ndToast } from '@b1nd/b1nd-toastify';
import { useAllowNightStudyMutation, useRejectNightStudyMutation, useRevertNightStudyMutation } from 'queries/ManageNightStudy/manageNightstudy.query';
import { useAllowProjectMutation, useRejectProjectMutation, useRevertProjectMutation } from 'queries/ManageNightStudy/manageProjectNightStudy.query';
import { QUERY_KEYS } from 'queries/queryKey';
import { useQueryClient } from 'react-query';

const useManageNightStudy = () => {
  const allowNightStudyMutation = useAllowNightStudyMutation();
  const rejectNightStudyMutation = useRejectNightStudyMutation();
  const revertNightStudyMutation = useRevertNightStudyMutation();

  const allowProjectMutation = useAllowProjectMutation();
  const rejectProjectMutation = useRejectProjectMutation();
  const revertProjectMutation = useRevertProjectMutation();

  const queryClient = useQueryClient();

  const allowNightStudy = (id: number) => {
    allowNightStudyMutation.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("승인 성공");
        return queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getAllowedNightStudy, QUERY_KEYS.manageNightStudy.getPendingNightStudy]
        );
      },
    });
  };

  const revertNightStudy = (id: number) => {
    revertNightStudyMutation.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("승인 취소 성공");
        return queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getAllowedNightStudy, QUERY_KEYS.manageNightStudy.getPendingNightStudy]
        );
      },
    });
  };

  const rejectNightStudy = (id: number, closeModal: () => void) => {
    rejectNightStudyMutation.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("거절 성공");
        closeModal()
        return queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getAllowedNightStudy, QUERY_KEYS.manageNightStudy.getPendingNightStudy]
        );
      },
    });
  };

  const allowProject = (params:{id:number, room:string}, closeModal: () => void) => {
    allowProjectMutation.mutate(params, {
      onSuccess: () => {
        B1ndToast.showSuccess("프로젝트 심자 승인 성공");
        closeModal();
        return queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getAllowedProjectNightStudy, QUERY_KEYS.manageNightStudy.getPendingProjectNightStudy]
        );
      }
    })
  }

  const revertProject = (id:number) => {
    revertProjectMutation.mutate(id, {
      onSuccess: async () => {
        B1ndToast.showSuccess("프로젝트 심자 대기 성공");
        await queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getAllowedProjectNightStudy, QUERY_KEYS.manageNightStudy.getPendingProjectNightStudy]
        );
      }
    })
  }

  const rejectProject = (params: {id: number, rejectReason: string}, closeModal: () => void) => {
    rejectProjectMutation.mutate(params, {
      onSuccess: async () => {
        B1ndToast.showSuccess("프로젝트 심자 대기 성공");
        closeModal();
        return queryClient.invalidateQueries(
          [QUERY_KEYS.manageNightStudy.getAllowedProjectNightStudy, QUERY_KEYS.manageNightStudy.getPendingProjectNightStudy]
        );
      }
    })
  }
  return {
    allowNightStudy,
    revertNightStudy,
    rejectNightStudy,
    allowProject,
    revertProject,
    rejectProject,
  };
};

export default useManageNightStudy