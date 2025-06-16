import { searchTagObject } from "hooks/NightStudy/useSearchBar";
import { useEffect, useState } from "react";
import { NightStudyBanResponse, StudentBanType } from "types/ManageNightStudy/manageNightStudy.type";

const useBanFilter = (
  searchInputData: string,
  searchTagData: searchTagObject[],
  banMemberData: NightStudyBanResponse | undefined
) => {
  const [banData, setBanData] = useState<StudentBanType[]>([]);
  useEffect(() => {
    const gradeFilter = searchTagData.find(item => item.name === "학년")?.tags.find(item => item.isSelected)?.value;
    const roomFilter = searchTagData.find(item => item.name === "학반")?.tags.find(item => item.isSelected)?.value;
    const statusFilter = searchTagData.find(item => item.name === "상태")?.tags.find(item => item.isSelected)?.value;
    
    if (statusFilter) {
      const filteredData = banMemberData?.data
        .filter(item => gradeFilter === "ALL" || item.grade === +gradeFilter!)
        .filter(item => roomFilter === "ALL" || item.room === +roomFilter!)
        .filter(item => statusFilter === "ALL" || item.isBanned.toString() === statusFilter!)
        .filter(item => item.name.includes(searchInputData))
      setBanData(filteredData!);
    }
  }, [searchTagData, banMemberData, searchInputData]);

  return {
    banData
  }
}

export default useBanFilter