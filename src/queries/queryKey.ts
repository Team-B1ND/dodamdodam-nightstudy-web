export const QUERY_KEYS = Object.freeze({
  nightStudy: {
    getMyNightStudy: "night-study/my",
    getMyProjectNightStudy: "night-study/project/my",
    getIsImBanned: "night-study/ban/my",
    getProjectRooms: "/night-study/project/rooms"
  },
  student: {
    getStudent: "night-study/getStudent"
  },
  manageNightStudy: {
    getAllNightStudy: "night-study/all",
    getAllowedNightStudy: "night-study/allowed",
    getPendingNightStudy: "night-study/pending",
    getBanMember: "night-study/ban",

    getAllowedProjectNightStudy: "night-study/project/allowed",
    getPendingProjectNightStudy: "night-study/project/pending",
    getProjcetStudent: "night-study/projcet/student",
    getProjcetUsingRoom: "night-study/projcet/rooms",
  }
});
