import useSearchBar from "hooks/NightStudy/useSearchBar"
import SearchBar from "../SearchBar"
import DataTable, { tableContentsData } from "../DataTable";
import dateTransform from "utils/Transform/dateTransform";
import { DodamCheckBox, DodamFilledButton, DodamModal } from "@b1nd/dds-web";
import { ReactElement, useState, useMemo } from "react";
import { useGetAllowedNightStudyQuery, useGetPendingNightStudyQuery } from "queries/ManageNightStudy/manageNightstudy.query";
import StatusController from "../StatusController";
import useManageNightStudy from "hooks/NightStudy/ManageNightStudy/useManageNightStudy";
import useNightStudyModal from "hooks/NightStudy/ManageNightStudy/useNightStudyModal";
import styled from "styled-components";
import DataViewModal from "../Modal/DataViewModal";
import { NIGHT_STUDY_TIME } from "constants/NightStudy/nightStudy.constant";
import RejectModal from "../Modal/RejectModal";
import ExtractExcelData from "../ExtractExcelData";
import dayjs from "dayjs";
import useNightStudyFilter from "hooks/NightStudy/ManageNightStudy/Filters/useNightStudyFilter";

const PersonalNightStudyManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("PERSONAL");

  const {allowNightStudy, revertNightStudy} = useManageNightStudy();

  const {data: allowedNightStudyData, isLoading: isAllowNightStudyLoading} = useGetAllowedNightStudyQuery();
  const {data: pendingNightStudyData, isLoading: isPendingNightStudyLoading} = useGetPendingNightStudyQuery();

  // 필터링 및 검색
  const {nightStudyData} = useNightStudyFilter(searchInputData, searchTagData, allowedNightStudyData, pendingNightStudyData)

  // 모달 사용
  const {modalInfo:dataModalInfo, openModalId:openDataModalId, closeModal:closeDataModal} = useNightStudyModal();
  const {modalInfo:rejectModalInfo, openModalId:openRejectModalId, closeModal:closeRejectModal} = useNightStudyModal();

  // 일괄 승인 및 일괄 거절
  const [selectedNightStudy, setSelectedNightStudy] = useState<number[]>([]);
  const isSelectAll = nightStudyData?.length !== 0 && nightStudyData?.every(item => selectedNightStudy.includes(item.id));


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
      ["",[Array.from({length:nightStudyData?.length}).map((_) => ""), 32]],
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
      <ManageMenuContainer>
        <StatusController
          type="PERSONAL"
          isObjectSelected={selectedNightStudy.length > 0}
          pageData={searchTagData.find(item => item.name === "상태")?.tags.find(item => item.isSelected)?.value!}
          selectedIds={selectedNightStudy}
          openRejectModal={openRejectModalId}
        />
        {searchTagData.find(item => item.name === "상태")?.tags.find(item => item.isSelected)?.value === "ALLOWED"
        && <ExtractExcelData
          excelData={nightStudyData?.map((data, idx)=> ({
            번호: idx + 1,
            이름: data.student.name,
            학번:
            data.student.number < 10
            ? `${data.student.grade}${data.student.room}0${data.student.number}`
            : `${data.student.grade}${data.student.room}${data.student.number}`,
            심자2:
            data.type === "NIGHT_STUDY_2" || data.type === "NIGHT_STUDY_3"
            ? "□"
            : "",
            연장: data.type === "NIGHT_STUDY_3" ? "O" : "",
            핸드폰여부: data.doNeedPhone ? "O" : "",
            복귀: "□",
          }))}
          fileName={dayjs().format("YYYY-MM-DD") + " 심자 중인 학생"}
          separateByGrade
        />}
      </ManageMenuContainer>
      <DataTable
        isDataLoading={isAllowNightStudyLoading || isPendingNightStudyLoading}
        key={`${nightStudyData?.length}-${nightStudyData?.map(item => item.id).join(',')}-${isSelectAll}-${selectedNightStudy.length}`}
        dataLength={nightStudyData?.length}
        itemIds={nightStudyData?.map(item => item.id)}
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

const ManageMenuContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export default PersonalNightStudyManager