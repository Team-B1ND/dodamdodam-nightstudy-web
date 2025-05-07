import styled from "styled-components"
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

const NightStudyStudentFallback = () => {
  return (
    <NightStudyStudentContainer/>
  )
}


const NightStudyStudentContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.fillNeutral};
  ${skeletonAnimtaion}
`

export default NightStudyStudentFallback