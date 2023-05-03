import styled from "styled-components";

export const ApplyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  padding: 40px 80px;
`;

export const ApplyTopWrap = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.contrast};
  font-weight: 600;

  span {
    color: #939393;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const ApplyMidWrap = styled.div`
  width: 100%;

  display: flex;
  column-gap: 70px;
  margin-top: 50px;
`;

export const ApplyBottomWrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;
