import useSearchBar from "hooks/NightStudy/useSearchBar"
import SearchBar from "../SearchBar"
import DataTable, { tableContentsData } from "../DataTable";
import dateTransform from "utils/Transform/dateTransform";
import { DodamCheckBox, DodamFilledButton, DodamModal } from "@b1nd/dds-web";
import { ReactElement, useState, useMemo, useEffect } from "react";
import { useGetAllowedNightStudyQuery, useGetPendingNightStudyQuery } from "queries/ManageNightStudy/manageNightstudy.query";
import { NightStudy } from "types/NightStudy/nightstudy.type";
import StatusController from "../StatusController";
import useManageNightStudy from "hooks/NightStudy/useManageNightStudy";
import useNightStudyModal from "hooks/NightStudy/useNightStudyModal";
import styled from "styled-components";
import DataViewModal from "../Modal/DataViewModal";
import { NIGHT_STUDY_TIME } from "constants/NightStudy/nightStudy.constant";
import RejectModal from "../Modal/RejectModal";

const PersonalNightStudyManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("PERSONAL");

  const {allowNightStudy, revertNightStudy} = useManageNightStudy();

  const {data: allowedNightStudyData} = useGetAllowedNightStudyQuery();
  const {data: pendingNightStudyData} = useGetPendingNightStudyQuery();
  const [nightStudyData, setNightStudyData] = useState<NightStudy[]>([]);

  // 모달 사용
  const {modalInfo:dataModalInfo, openModalId:openDataModalId, closeModal:closeDataModal} = useNightStudyModal();
  const {modalInfo:rejectModalInfo, openModalId:openRejectModalId, closeModal:closeRejectModal} = useNightStudyModal();

  // 일괄 승인 및 일괄 거절
  const [selectedNightStudy, setSelectedNightStudy] = useState<number[]>([]);
  const isSelectAll = nightStudyData.length !== 0 && nightStudyData?.every(item => selectedNightStudy.includes(item.id));

  // 필터링 및 검색
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

  // 테이블 데이터
  const tableContents = useMemo(() => {
    return new Map<string | ReactElement, tableContentsData>([
      [
      <DodamCheckBox
          key="select-all"
          isDisabled={isSelectAll}
          onClick={() => {
            setSelectedNightStudy((prev) => nightStudyData?.every(item => prev.includes(item.id)) ? [] : nightStudyData.map(item => item.id))
            }
          }
        />,
        [nightStudyData?.map(item => (
          <DodamCheckBox
            key={item.id}
            isDisabled={selectedNightStudy.includes(item.id)}
            onClick={() =>
              setSelectedNightStudy((prev) => prev.includes(item.id)
              ? prev.filter(id => id !== item.id)
              : [...prev, item.id])
            }
          />
      )), 64]],
      ["이름", [nightStudyData?.map(item => item.student.name), 64]],
      ["학번", [nightStudyData?.map(item => `${item.student.grade}${item.student.room}${item.student.number < 10 ? `0${item.student.number}` : item.student.number}`), 64]],
      ["시간", [nightStudyData?.map(item => NIGHT_STUDY_TIME[item.type]), 64]],
      ["심자 사유", [nightStudyData?.map(item => item.content), 160]],
      ["시작일", [nightStudyData?.map(item => dateTransform.hyphen(item.startAt)), 120]],
      ["종료일", [nightStudyData?.map(item => dateTransform.hyphen(item.endAt)), 120]],
      ["휴대폰", [nightStudyData?.map(item => item.doNeedPhone ? "O" : "X"), 64]],
      ["필요 이유", [nightStudyData?.map(item => item.reasonForPhone || "-"), 160]],
      ["상태 제어", [nightStudyData?.map(item => (
        item.status === "ALLOWED"
        ? <DodamFilledButton
            key={item.id}
            text="승인 취소"
            size="Small"
            style={{width:"90%"}}
            backgroundColorType="Negative"
            onClick={(e) => {
              e.stopPropagation()
              revertNightStudy(item.id)
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
                allowNightStudy(item.id)
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
                openRejectModalId(item.id)
              }}
            />
          </div>
          ) : <DodamFilledButton key={item.id} text="거절 취소" size="Small" style={{width:"90%"}} backgroundColorType="Negative" onClick={() => revertNightStudy(item.id)}/>
        )),"FILL"]
      ] 
    ]);
  }, [nightStudyData, selectedNightStudy, isSelectAll]);

  return (
    <PersonalNightStudyContainer>
      <SearchBar
        searchInputData={searchInputData}
        searchTagData={searchTagData}
        handleInput={handleInput}
        handleTagSelect={handleTagSelect}
      />
      <StatusController
        type="PERSONAL"
        isObjectSelected={selectedNightStudy.length > 0}
        pageData={searchTagData.find(item => item.name === "상태")?.tags.find(item => item.isSelected)?.value!}
        selectedIds={selectedNightStudy}
        openRejectModal={openRejectModalId}
      />
      <DataTable
        key={`${nightStudyData?.length}-${nightStudyData?.map(item => item.id).join(',')}-${isSelectAll}-${selectedNightStudy.length}`}
        dataLength={nightStudyData?.length}
        itemIds={nightStudyData.map(item => item.id)}
        tableContents={tableContents}
        onColumnClick={openDataModalId}
      />
      <DodamModal isOpen={dataModalInfo.isOpen} background={true}>
        <DataViewModal
          isOpen={dataModalInfo.isOpen}
          data={nightStudyData?.find(item => item.id === dataModalInfo.dataId)!}
          close={closeDataModal}
        />
      </DodamModal>
      <RejectModal
        isOpen={rejectModalInfo.isOpen}
        dataId={rejectModalInfo.dataId}
        type="REJECT_NIGHT_STUDY"
        close={closeRejectModal}
      />
    </PersonalNightStudyContainer>
  )
}

const PersonalNightStudyContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 90%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default PersonalNightStudyManager