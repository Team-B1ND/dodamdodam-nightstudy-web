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
          {text:"전체", isSelected: true},
          {text:"대기중", isSelected: false},
          {text:"수락됨", isSelected: false}
        ]
      },
      {
        name: "학년",
        tags: [
          {text:"전체 학년", isSelected: true},
          {text:"1학년", isSelected: false},
          {text:"2학년", isSelected: false},
          {text:"3학년", isSelected: false},
        ]
      },
      {
        name: "학반",
        tags: [
          {text:"전체 학반", isSelected: true},
          {text:"1반", isSelected: false},
          {text:"2반", isSelected: false},
          {text:"3반", isSelected: false},
          {text:"4반", isSelected: false},
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
          {text:"전체", isSelected: true},
          {text:"대기중", isSelected: false},
          {text:"수락됨", isSelected: false}
        ]
      },
      {
        name: "진행 시간",
        tags: [
          {text:"모든 심자", isSelected: true},
          {text:"심자 1", isSelected: false},
          {text:"심자 2", isSelected: false},
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
          {text:"전체", isSelected: true},
          {text:"정지", isSelected: false},
          {text:"미정지", isSelected: false}
        ]
      },
      {
        name: "학년",
        tags: [
          {text:"전체 학년", isSelected: true},
          {text:"1학년", isSelected: false},
          {text:"2학년", isSelected: false},
          {text:"3학년", isSelected: false},
        ]
      },
      {
        name: "학반",
        tags: [
          {text:"전체 학반", isSelected: true},
          {text:"1반", isSelected: false},
          {text:"2반", isSelected: false},
          {text:"3반", isSelected: false},
          {text:"4반", isSelected: false},
        ]
      },
    ]
  },
]