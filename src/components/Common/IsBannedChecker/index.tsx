import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import { useGetIsImBannedQuery } from "queries/NightStudy/nightstudy.query"
import styled from "styled-components";

const IsBannedChecker = () => {
  const { data: isImBannedData } = useGetIsImBannedQuery();

  return isImBannedData?.data ? (
    <BannedCheckerContainer>
      <p>{isImBannedData.data.ended} 까지 심자 정지입니다.</p>
      <BanReason>사유 : {isImBannedData.data.banReason}</BanReason>
    </BannedCheckerContainer>
  ) : (
    <></>
  )
}

const BannedCheckerContainer = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.statusNegative};
  ${DodamShape.Large}

  > p {
    color: ${({ theme }) => theme.staticWhite};
    ${DodamTypography.Body1.Medium}
  }
`

const BanReason = styled.p`
  ${DodamTypography.Headline.Bold}
`
export default IsBannedChecker