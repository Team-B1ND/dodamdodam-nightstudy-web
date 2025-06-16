import { ReactElement } from "react"
import styled from "styled-components"
import { DataTableBlock } from "../style"
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

interface DataColumnProps {
  tableColumnData: {
    data: (string | number | ReactElement)[];
    size: (number | "FILL")[];
  };
  onColumnClick: () => void;
}

const DataColumn = ({tableColumnData, onColumnClick}: DataColumnProps) => {
  return (
    <DataColumnContainer onClick={onColumnClick}>
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

const DataColumnContainer = styled.button`
  outline: none;
  border: none;
  display: flex;
  width: 100%;
  align-items: center;
  min-height: 56px;
  background-color: transparent;
  border: 4px;
  cursor: pointer;
  ${DodamTypography.Body1.Medium}
  &:hover {
    background-color: ${({ theme }) => theme.fillNormal};
    /* border: 1px solid black; */
  }
`

export default DataColumn