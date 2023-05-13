import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import styled from "styled-components";

const LateNightFallBackLoader = () => {
  return (
    <Container>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Item key={idx} />
      ))}
    </Container>
  );
};

export default LateNightFallBackLoader;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 17px;
  margin-top: 61px;
`;

const Item = styled.div`
  width: 500px;
  height: 81px;

  ${skeletonAnimtaion}
`;
