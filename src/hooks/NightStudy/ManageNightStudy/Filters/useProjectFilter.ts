import { searchTagObject } from 'hooks/NightStudy/useSearchBar';
import { useEffect, useState } from 'react'
import { ProjectNightStudyResponse } from 'types/ManageNightStudy/manageProjectNightStudy.type';
import { ProjectNightStudy } from "types/ManageNightStudy/manageProjectNightStudy.type";

const useProjectFilter = (
  searchInputData: string,
  searchTagData: searchTagObject[],
  allowedProjectData: ProjectNightStudyResponse | undefined,
  pendingProjectData: ProjectNightStudyResponse | undefined
) => {
  const [projectData, setProjectData] = useState<ProjectNightStudy[]>([]);
  useEffect(() => {
    const timeFilter = searchTagData.find(item => item.name === "진행 시간")?.tags.find(item => item.isSelected)?.value;
    const statusFilter = searchTagData.find(item => item.name === "상태")?.tags.find(item => item.isSelected)?.value;
      
    const sourceData = statusFilter === "ALLOWED" ? allowedProjectData?.data : pendingProjectData?.data;
      
    if (sourceData) {
      const filteredData = sourceData
        .filter(item => timeFilter === "ALL" || item.type === timeFilter)
        .filter(item => item.name.includes(searchInputData))
      setProjectData(filteredData);
    }
  }, [searchTagData, allowedProjectData, pendingProjectData, searchInputData]);
  return {
    projectData
  }
}

export default useProjectFilter