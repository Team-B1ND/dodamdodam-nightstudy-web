import * as S from "./style";
import DataHeader from "./DataHeader";
import { ReactElement, useState } from "react";
import DataColumn from "./DataColumn";

export type tableContentsData = [(string | number | ReactElement)[], (number | "FILL")]
export interface DataTableProps {
  tableContents: Map<string | ReactElement, tableContentsData>;
  itemIds: number[];
  dataLength: number;
  onColumnClick: (id: number) => void;
  isDataLoading: boolean;
}

const DataTable = ({tableContents, dataLength, onColumnClick, itemIds, isDataLoading}: DataTableProps) => {
  const [columnData] = useState<tableContentsData[]>(Array.from(tableContents.values()));
  return (
    <S.DataTableContainer>
      <DataHeader tableContents={tableContents} />
      {dataLength > 0 ? Array.from({length: dataLength}, (_, idx) => (
        <DataColumn
          onColumnClick={() => onColumnClick(itemIds[idx])}
          key={idx}
          tableColumnData={{
            data: columnData.map(item => item[0][idx]),
            size: columnData.map(item => item[1])
          }}
        />
      )) : (
        <S.DataTableNotContents>
          {isDataLoading ? "데이터를 불러오는 중입니다..." : "검색에 부합하는 결과가 없거나, 데이터가 없습니다!"}
        </S.DataTableNotContents>
      )}
    </S.DataTableContainer>
  )
}

export default DataTable