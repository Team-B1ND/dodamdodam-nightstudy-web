import { DodamColor, DodamShape, DodamTypography } from "@b1nd/dds-web";
import { useGetIsImBannedQuery } from "queries/NightStudy/nightstudy.query"
import styled from "styled-components";

const IsBannedChecker = () => {
  const { data : isImBannedData } = useGetIsImBannedQuery({
    suspense: true,
  });

  return isImBannedData?.data ? (
    <BannedCheckerContainer>
      <p>{isImBannedData.data.ended} 까지 심자 정지 상태입니다!</p>
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
  background-color: ${DodamColor.red50};
  ${DodamShape.Large}

  > p {
    color: ${({ theme }) => theme.staticWhite};
    ${DodamTypography.Body1.Medium}
  }
`

const BanReason = styled.p`
  color: ${DodamColor.red10};
  ${DodamTypography.Headline.Bold}
`
export default IsBannedChecker