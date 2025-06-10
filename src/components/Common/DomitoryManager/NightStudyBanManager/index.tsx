import useSearchBar from "hooks/NightStudy/useSearchBar";
import SearchBar from "../SearchBar"
import styled from "styled-components";
import DataTable, { tableContentsData } from "../DataTable";
import { useEffect, useMemo, useState } from "react";
import { useGetBanMemberQuery } from "queries/ManageNightStudy/manageNightstudy.query";
import { StudentBanType } from "types/ManageNightStudy/manageNightStudy.type";
import { DodamFilledButton } from "@b1nd/dds-web";
import useBanStudent from "hooks/NightStudy/useBanStudent";
import useNightStudyModal from "hooks/NightStudy/useNightStudyModal";
import NightStudyBanModal from "../Modal/NightStudyBanModal";

const NightStudyBanManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("BAN");

  const {deleteBan} = useBanStudent();
  const {modalInfo, closeModal, openModalId} = useNightStudyModal();

  const {data:banMemberData} = useGetBanMemberQuery();
  const [banData, setBanData] = useState<StudentBanType[]>([]);

  // 필터링 및 검색
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

  const tableContents = useMemo(() => {
    return new Map<string, tableContentsData>([
      ["학생명", [banData?.map(item => item.name), 144]],
      ["학반", [banData?.map(item => `${item.grade}학년 ${item.room}반 ${item.number}번`), 156]],
      ["전화번호", [banData?.map(item => item.phone), 156]],
      ["", [Array.from({length: banData?.length}).map((_, idx) => ""), "FILL"]],
      ["제어", [banData?.map(item => (
        item.isBanned ? (
          <DodamFilledButton
            text="해제"
            size="Small" 
            style={{width:"90%"}} 
            backgroundColorType="Assistive"
            onClick={(e) => {
              e.stopPropagation()
              deleteBan(item.id)
            }}
          />
        ) : (
          <DodamFilledButton
            text="정지"
            size="Small" 
            style={{width:"90%"}} 
            backgroundColorType="Negative"
            onClick={(e) => {
              e.stopPropagation()
              openModalId(item.id)
            }}
          />
        )
      )), 64]]
    ])
  }, [banData, deleteBan, openModalId])

  return (
    <NightStudyBanContainer>
      <SearchBar
        searchInputData={searchInputData}
        searchTagData={searchTagData}
        handleInput={handleInput}
        handleTagSelect={handleTagSelect}
      />
      <DataTable
        key={`${banData?.length}-${banData?.map(item => item.id).join(',')}`}
        tableContents={tableContents}
        itemIds={banData?.map(item => item.id)}
        dataLength={banData?.length}
        onColumnClick={(id:number) => void(0)}
      />
      <NightStudyBanModal
        close={closeModal}
        dataId={modalInfo.dataId}
        isOpen={modalInfo.isOpen}
      />
    </NightStudyBanContainer>
  )
}

const NightStudyBanContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 90%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default NightStudyBanManager