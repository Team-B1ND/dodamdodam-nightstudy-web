import { searchTagObject } from "hooks/NightStudy/useSearchBar"

export type searchBarDataName = "PERSONAL" | "PROJECT" | "BAN";

interface searchBarDataType {
  name: searchBarDataName;
  data: searchTagObject[];
}

export const SEARCH_BAR_DATA: searchBarDataType[] = [
  {
    name: "PERSONAL",
    data: [
      {
        name: "상태",
        tags: [
          {text:"대기중", isSelected: true, value: "PENDING"},
          {text:"수락됨", isSelected: false, value: "ALLOWED"},
        ]
      },
      {
        name: "학년",
        tags: [
          {text:"전체 학년", isSelected: true, value: "ALL"},
          {text:"1학년", isSelected: false, value: "1"},
          {text:"2학년", isSelected: false, value: "2"},
          {text:"3학년", isSelected: false, value: "3"},
        ]
      },
      {
        name: "학반",
        tags: [
          {text:"전체 학반", isSelected: true, value: "ALL"},
          {text:"1반", isSelected: false, value: "1"},
          {text:"2반", isSelected: false , value: "2"},
          {text:"3반", isSelected: false, value: "3"},
          {text:"4반", isSelected: false, value: "4"},
        ]
      },
    ]
  },
  {
    name: "PROJECT",
    data: [
      {
        name: "상태",
        tags: [
          {text:"대기중", isSelected: true, value: "PENDING"},
          {text:"수락됨", isSelected: false, value: "ALLOWED"}
        ]
      },
      {
        name: "진행 시간",
        tags: [
          {text:"모든 심자", isSelected: true, value: "ALL"},
          {text:"심자 1", isSelected: false, value: "NIGHT_STUDY_PROJECT_1"},
          {text:"심자 2", isSelected: false, value: "NIGHT_STUDY_PROJECT_2"},
        ]
      },
    ]
  },
  {
    name: "BAN",
    data: [
      {
        name: "상태",
        tags: [
          {text:"전체", isSelected: true, value: "ALL"},
          {text:"정지", isSelected: false, value: "true"},
          {text:"미정지", isSelected: false, value: "false"}
        ]
      },
      {
        name: "학년",
        tags: [
          {text:"전체 학년", isSelected: true, value: "ALL"},
          {text:"1학년", isSelected: false, value: "1"},
          {text:"2학년", isSelected: false, value: "2"},
          {text:"3학년", isSelected: false, value: "3"},
        ]
      },
      {
        name: "학반",
        tags: [
          {text:"전체 학반", isSelected: true, value: "ALL"},
          {text:"1반", isSelected: false, value: "1"},
          {text:"2반", isSelected: false , value: "2"},
          {text:"3반", isSelected: false, value: "3"},
          {text:"4반", isSelected: false, value: "4"},
        ]
      },
    ]
  },
]