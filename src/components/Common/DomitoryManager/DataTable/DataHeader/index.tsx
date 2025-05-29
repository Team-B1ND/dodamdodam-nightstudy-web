import { DodamCheckBox } from "@b1nd/dds-web"
import { DataTableProps } from ".."
import { useState } from "react"
import { DataTableBlock } from "../style";
import styled from "styled-components";

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
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.lineNormal};
`
export default DataHeader