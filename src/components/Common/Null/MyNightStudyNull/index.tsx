import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

const MyNightStudyNull = () => {
  return (
    <Container>
      <Text>신청한 심자가 없습니다</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.labelNeutral};
  ${DodamTypography.Body2.Bold}
`;

export default MyNightStudyNull;
