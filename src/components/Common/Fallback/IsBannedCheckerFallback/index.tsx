import { skeletonAnimtaion } from '@b1nd/b1nd-styled-components-util'
import { DodamShape } from '@b1nd/dds-web'
import styled from 'styled-components'

const IsBannedCheckerFallback = () => {
  return (
    <BannedCheckerFallbackContainer/>
  )
}

const BannedCheckerFallbackContainer = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${DodamShape.Large}
  ${skeletonAnimtaion}
`

export default IsBannedCheckerFallback