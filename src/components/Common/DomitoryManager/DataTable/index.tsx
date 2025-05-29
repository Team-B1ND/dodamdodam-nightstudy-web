import * as S from "./style";
import DataHeader from "./DataHeader";
import { ReactElement, useState } from "react";
import DataColumn from "./DataColumn";

export type tableContentsData = readonly [(string | number | ReactElement)[], (number | "FILL")]
export interface DataTableProps {
  tableContents: Map<string | number, tableContentsData>;
}

const DataTable = ({tableContents}:DataTableProps) => {
  const [columnData] = useState<tableContentsData[]>(Array.from(tableContents.values()));
  return (
    <S.DataTableContainer>
      <DataHeader tableContents={tableContents} />
      {Array.from({length: columnData.length}, (_, idx) => (
        <DataColumn
          key={idx}
          tableColumnData={{
            data: Array.from(tableContents.values()).map(item => item[0][idx]),
            size: Array.from(tableContents.values()).map(item => item[1])
          }}
        />
      ))}
    </S.DataTableContainer>
  )
}

export default DataTable