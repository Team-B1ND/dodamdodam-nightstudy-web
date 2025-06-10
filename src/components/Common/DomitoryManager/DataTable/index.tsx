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
}

const DataTable = ({tableContents, dataLength, onColumnClick, itemIds}: DataTableProps) => {
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
          검색에 부합하는 결과가 없거나, 데이터가 없습니다!
        </S.DataTableNotContents>
      )}
    </S.DataTableContainer>
  )
}

export default DataTable