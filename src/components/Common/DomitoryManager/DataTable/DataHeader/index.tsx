import { ReactElement, useState } from "react"
import { DataTableBlock } from "../style";
import styled from "styled-components";
import { tableContentsData } from "..";

interface DataTableProps {
  tableContents: Map<string | ReactElement, tableContentsData>;
}

const DataHeader = ({tableContents}: DataTableProps) => {
  const [headerData] = useState(
    Array.from(tableContents.entries(), (item) => ({
      name: item[0],
      size: item[1][1],
    }))
  );
  
  return (
    <DataHeaderContainer>
      {headerData.map((item, idx) => (
        <DataTableBlock $size={item.size} key={idx}>{item.name}</DataTableBlock>
      ))}
    </DataHeaderContainer>
  )
}

const DataHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 48px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.lineNormal};
`
export default DataHeader