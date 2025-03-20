import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

interface Props {
  type: "Pending" | "Allow";
}

const MyNightStudyNull = ({ type }: Props) => {
  return (
    <Container>
      <Text>
        {type === "Pending"
          ? "신청한 심자가 없습니다"
          : "승인된 심자가 없습니다"}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.labelNeutral};
  ${DodamTypography.Body2.Bold}
`;

export default MyNightStudyNull;
