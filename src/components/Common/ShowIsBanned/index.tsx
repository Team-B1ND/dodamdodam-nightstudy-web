import { DodamShape } from '@b1nd/dds-web'
import styled from 'styled-components'

const ShowIsBanned = () => {
  
  return (
    <BannedContainer>
      심자 정지된 상태입니다!
    </BannedContainer>
  )
}

export default ShowIsBanned

export const BannedContainer = styled.div`
  width: 32%;
  height: fit-content;
  display: flex;
  padding: 12px 0;
  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};
  color: ${({ theme }) => theme.statusNegative};
`