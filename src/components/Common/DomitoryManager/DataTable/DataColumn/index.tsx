import { ReactElement } from "react"
import styled from "styled-components"
import { DataTableBlock } from "../style"

interface DataColumnProps {
  tableColumnData: {
    data: (string | number | ReactElement)[];
    size: (number | "FILL")[];
  };
}

const DataColumn = ({tableColumnData}: DataColumnProps) => {
  return (
    <DataColumnContainer>
      {tableColumnData.data.map((item, idx) => (
        <DataTableBlock
          $size={tableColumnData.size[idx]}
          key={idx}
        >
          {item}
        </DataTableBlock>
      ))}
    </DataColumnContainer>
  )
}

const DataColumnContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export default DataColumn