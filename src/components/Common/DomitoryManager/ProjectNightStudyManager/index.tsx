import useSearchBar from "hooks/NightStudy/useSearchBar";
import SearchBar from "../SearchBar"
import DataTable, { tableContentsData } from "../DataTable";
import { DodamFilledButton, DodamModal } from "@b1nd/dds-web";
import useManageNightStudy from "hooks/NightStudy/useManageNightStudy";
import { useGetAllowedProjectQuery, useGetPendingProjectQuery } from "queries/ManageNightStudy/manageProjectNightStudy.query";
import { useEffect, useMemo, useState } from "react";
import { ProjectNightStudy } from "types/ManageNightStudy/manageProjectNightStudy.type";
import useNightStudyModal from "hooks/NightStudy/useNightStudyModal";
import ProjectAllowModal from "./ProjectAllowModal";
import DataViewModal from "../Modal/DataViewModal";
import RejectModal from "../Modal/RejectModal";
import styled from "styled-components";
import ExtractExcelData from "../ExtractExcelData";
import dayjs from "dayjs";

const ProjectNightStudyManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("PROJECT");
  const {revertProject} = useManageNightStudy();

  const {data: allowedProjectData, isLoading: isAllowProjectLoading} = useGetAllowedProjectQuery();
  const {data: pendingProjectData, isLoading: isPendingProjectLoading} = useGetPendingProjectQuery();
  const [projectData, setProjectData] = useState<ProjectNightStudy[]>([]);

  // 각각 승인, 데이터, 거절 모달
  const {modalInfo:allowModalInfo, openModalId:openAllowModal, closeModal:closeAllowModal} = useNightStudyModal();
  const {modalInfo:dataModalInfo, openModalId:openDataModal, closeModal:closeDataModal} = useNightStudyModal();
  const {modalInfo:rejectModalInfo, openModalId:openRejectModal, closeModal:closeRejectModal} = useNightStudyModal();

  // 필터링 및 검색
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
  
  const tableContents = useMemo(() => {
    return new Map<string, tableContentsData>([
      ["프로젝트명", [projectData?.map(item => item.name), 160]],
      ["프로젝트 설명", [projectData?.map(item => item.description), 200]],
      ["진행시간", [projectData?.map(item => item.type === "NIGHT_STUDY_PROJECT_1" ? "심자 1" : "심자 2"), 64]],
      ["장소", [projectData?.map(item => item.room || "미지정"), 120]],
      ["시작일", [projectData?.map(item => item.startAt), 144]],
      ["종료일", [projectData?.map(item => item.endAt), 144]],
      ["상태 제어", [projectData?.map(item => (
        item.status === "ALLOWED"
        ? <DodamFilledButton
            key={item.id}
            text="승인 취소"
            size="Small"
            style={{width:"90%"}}
            backgroundColorType="Negative"
            onClick={(e) => {
              e.stopPropagation()
              revertProject(item.id)
            }}
          />
        : item.status === "PENDING"
          ? (
          <div key={item.id} style={{display:"flex", gap:"4px", width:"100%", justifyContent:"center"}}>
            <DodamFilledButton
              text="승인"
              size="Small" 
              style={{width:"44%"}} 
              backgroundColorType="Primary"
              customStyle={{fontSize:"14px", color:"#fff"}}
              onClick={(e) => {
                e.stopPropagation()
                openAllowModal(item.id)
              }}
            />
            <DodamFilledButton
              text="거절"
              size="Small" 
              style={{width:"44%"}} 
              backgroundColorType="Negative" 
              customStyle={{fontSize:"14px"}}
              onClick={(e) => {
                e.stopPropagation()
                openRejectModal(item.id)
              }}
            />
          </div>
          ) : (
          <DodamFilledButton
            key={item.id}
            text="거절 취소" 
            size="Small" 
            style={{width:"90%"}} 
            backgroundColorType="Negative"
            onClick={(e) => {
              e.stopPropagation()
              revertProject(item.id)
            }}
          />)
      )), "FILL"]]
    ])
  }, [projectData, searchInputData, searchTagData])

  return (
    <ProjectNightStudyContainer>
      <SearchBar
        searchInputData={searchInputData}
        searchTagData={searchTagData}
        handleInput={handleInput}
        handleTagSelect={handleTagSelect}
      />
      {searchTagData.find(item => item.name === "상태")?.tags.find(item => item.isSelected)?.value === "ALLOWED"
        && <ExtractExcelData
          excelData={(() => {
            let i = 1;
            return projectData.map((data) => data.members.map((member) => ({
              번호 : i++,
              이름 : member.name,
              학번 : `${member.grade}${member.room}${member.number > 9 ? member.number : `0${member.number}`}`,
              프로젝트명 : data.name,
              장소 : data.room,
              심자체크 : "",
              복귀체크 : "",
            }))).flat()
          })()}
          fileName={dayjs().format("YYYY-MM-DD") + " 프로젝트 심자 중인 학생"}
        />}
      <DataTable
        isDataLoading={isAllowProjectLoading || isPendingProjectLoading}
        key={`${projectData?.length}-${projectData?.map(item => item.id).join(',')}`}
        tableContents={tableContents}
        itemIds={projectData.map(item => item.id)}
        dataLength={projectData.length}
        onColumnClick={openDataModal}
      />
      <DodamModal isOpen={allowModalInfo.isOpen} background={true}>
        <ProjectAllowModal
          close={closeAllowModal}
          project={projectData.find(item => item.id === allowModalInfo.dataId)!}
        />
      </DodamModal>
      <DodamModal isOpen={dataModalInfo.isOpen} background={true}>
        <DataViewModal
          isOpen={dataModalInfo.isOpen}
          data={projectData.find(item => item.id === dataModalInfo.dataId)!}
          close={closeDataModal}
        />
      </DodamModal>
      <RejectModal
        isOpen={rejectModalInfo.isOpen}
        close={closeRejectModal}
        dataId={rejectModalInfo.dataId}
        type="REJECT_PROJECT"
      />
    </ProjectNightStudyContainer>
  )
}

const ProjectNightStudyContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 90%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default ProjectNightStudyManager