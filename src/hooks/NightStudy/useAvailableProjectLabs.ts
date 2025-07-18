import { useMemo } from "react";
import { useGetProjectUsingLabQuery } from "queries/ManageNightStudy/manageProjectNightStudy.query";

export const useAvailableProjectLabs = (targetType: string) => {
  const { data } = useGetProjectUsingLabQuery();

  const result = useMemo(() => {
    const usedRooms = data?.data?.filter(lab => lab.type === targetType) || [];

    const unavailableMap = usedRooms.reduce((acc, lab) => {
        acc[lab.room!] = {
          startAt: lab.startAt,
          endAt: lab.endAt,
        };
        return acc;
      }, {} as Record<string, { startAt: string; endAt: string }>);
      
      return {
        isRoomAvailable: (room: string) => !unavailableMap[room],
        getRoomDateRange: (room: string) =>
          unavailableMap[room] ? { start: unavailableMap[room].startAt, end: unavailableMap[room].endAt } : null
      };
  }, [data, targetType]);

  return result;
};