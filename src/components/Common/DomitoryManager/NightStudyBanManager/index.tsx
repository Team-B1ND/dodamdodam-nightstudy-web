import useSearchBar from "hooks/NightStudy/useSearchBar";
import SearchBar from "../SearchBar"
import styled from "styled-components";
import DataTable, { tableContentsData } from "../DataTable";
import { useMemo } from "react";
import { useGetBanMemberQuery } from "queries/ManageNightStudy/manageNightstudy.query";
import { DodamFilledButton } from "@b1nd/dds-web";
import useBanStudent from "hooks/NightStudy/ManageNightStudy/useBanStudent";
import useNightStudyModal from "hooks/NightStudy/ManageNightStudy/useNightStudyModal";
import NightStudyBanModal from "../Modal/NightStudyBanModal";
import useBanFilter from "hooks/NightStudy/ManageNightStudy/Filters/useBanFilter";

const NightStudyBanManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("BAN");

  const {deleteBan} = useBanStudent();
  const {modalInfo, closeModal, openModalId} = useNightStudyModal();

  const {data:banMemberData, isLoading} = useGetBanMemberQuery();

  const {banData} = useBanFilter(searchInputData, searchTagData, banMemberData);

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
        isDataLoading={isLoading}
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