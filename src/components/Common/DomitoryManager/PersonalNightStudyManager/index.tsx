import useSearchBar from "hooks/NightStudy/useSearchBar"
import SearchBar from "../SearchBar"
import DataTable from "../DataTable";
import dateTransform from "utils/Transform/dateTransform";
import { DodamCheckBox, DodamFilledButton } from "@b1nd/dds-web";

const PersonalNightStudyManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("PERSONAL");

  const dummy = [
    {
      id: 1,
      content: "asdfasdf asdfadsfsdfd",
      status: "ALLOWED",
      doNeedPhone: true,
      reasonForPhone: "i need phone!dfasdfdf",
      student: {
        id: 1,
        name: "여승원",
        grade: 2,
        room: 3,
        number: 20,
      },
      rejectReason: null,
      startAt: "2023-05-03",
      endAt: "2023-05-16",
      createdAt: "2023-05-03 12:40:58",
      modifiedAt: "2023-05-03 12:40:58",
    },
    {
      id: 2,
      content: "asdfasdf asdfadsfsdfd",
      status: "REJECTED",
      doNeedPhone: false,
      reasonForPhone: null,
      student: {
        id: 2,
        name: "박재민",
        grade: 2,
        room: 3,
        number: 10,
      },
      rejectReason: "떠듬",
      startAt: "2023-05-13",
      endAt: "2023-05-20",
      createdAt: "2023-05-03 12:40:58",
      modifiedAt: "2023-05-03 12:40:58",
    },
    {
      id: 3,
      content: "asdfasdf asdfadsfsdfd",
      status: "PENDING",
      doNeedPhone: false,
      reasonForPhone: null,
      student: {
        id: 3,
        name: "김은찬",
        grade: 2,
        room: 2,
        number: 5,
      },
      rejectReason: null,
      startAt: "2023-05-13",
      endAt: "2023-05-20",
      createdAt: "2023-05-03 12:40:58",
      modifiedAt: "2023-05-03 12:40:58",
    },
  ];

  const selectAll = () => {
    console.log("all")
  }

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"12px"}}>
      <SearchBar
        searchInputData={searchInputData}
        searchTagData={searchTagData}
        handleInput={handleInput}
        handleTagSelect={handleTagSelect}
      />
      <DataTable
        tableContents={new Map([
          ["선택", [dummy.map(item => (
            item.status === "ALLOWED"
            ? <DodamCheckBox isDisabled={true} onClick={selectAll}/>
            : item.status === "PENDING"
              ? <DodamCheckBox isDisabled={false} onClick={()=>console.log("pending")}/>
              : <DodamCheckBox isDisabled={true} onClick={() => console.log("REJECT")}/>
          )), 64]],
          ["이름", [dummy.map(item => item.student.name), 64]],
          ["학번", [dummy.map(item => `${item.student.grade}${item.student.room}${item.student.number < 10 ? `0${item.student.number}` : item.student.number}`), 64]],
          ["심자 사유", [dummy.map(item => item.content), 180]],
          ["시작일", [dummy.map(item => dateTransform.hyphen(item.startAt)), 120]],
          ["종료일", [dummy.map(item => dateTransform.hyphen(item.endAt)), 120]],
          ["휴대폰", [dummy.map(item => item.doNeedPhone ? "O" : "X"), 64]],
          ["필요 이유", [dummy.map(item => item.reasonForPhone || "-"), 140]],
          ["상태 제어", [dummy.map(item => (
            item.status === "ALLOWED"
            ? <DodamFilledButton text="승인 취소" size="Small" width={100} backgroundColorType="Negative"/>
            : item.status === "PENDING"
              ? (
              <div style={{display:"flex", gap:"4px"}}>
                <DodamFilledButton text="승인" size="Small" width={48} backgroundColorType="Primary" customStyle={{fontSize:"14px"}}/>
                <DodamFilledButton text="거절" size="Small" width={48} backgroundColorType="Negative" customStyle={{fontSize:"14px"}}/>
              </div>
              ) : <DodamFilledButton text="거절 취소" size="Small" width={100} backgroundColorType="Negative"/>
            )),"FILL"]
          ] 
        ])}
      />
    </div>
  )
}

export default PersonalNightStudyManager