import { useEffect, useState } from 'react'
import { searchTagObject } from '../../useSearchBar';
import { NightStudy, NightStudyResponse } from 'types/NightStudy/nightstudy.type';

const useNightStudyFilter = (
  searchInputData: string,
  searchTagData: searchTagObject[],
  allowedNightStudyData: NightStudyResponse | undefined,
  pendingNightStudyData: NightStudyResponse | undefined,
) => {
  const [nightStudyData, setNightStudyData] = useState<NightStudy[]>(allowedNightStudyData?.data!);
  useEffect(() => {
    const gradeFilter = searchTagData.find(item => item.name === "학년")?.tags.find(item => item.isSelected)?.value;
    const roomFilter = searchTagData.find(item => item.name === "학반")?.tags.find(item => item.isSelected)?.value;
    const statusFilter = searchTagData.find(item => item.name === "상태")?.tags.find(item => item.isSelected)?.value;
    
    const sourceData = statusFilter === "ALLOWED" ? allowedNightStudyData?.data : pendingNightStudyData?.data;
    
    if (sourceData) {
      const filteredData = sourceData
        .filter(item => gradeFilter === "ALL" || item.student.grade === +gradeFilter!)
        .filter(item => roomFilter === "ALL" || item.student.room === +roomFilter!)
        .filter(item => item.student.name.includes(searchInputData))
      setNightStudyData(filteredData);
    }
  }, [searchTagData, allowedNightStudyData, pendingNightStudyData, searchInputData]);

  return {
    nightStudyData
  }
}

export default useNightStudyFilter