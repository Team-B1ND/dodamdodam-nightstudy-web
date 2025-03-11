import styled from "styled-components";

export const ApplyContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
 
  padding: 10px 50px;
  @media screen and (max-width: 1000px) {
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
  }
    
  }
  
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
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  column-gap: 70px;
  row-gap: 50px;
  margin-top: 50px;
`;

export const ApplyBottomWrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const ApplyButtonContainer = styled.div`
  width: 876px;
  max-width: 876px;
  display: flex;
  justify-content: flex-end;
`;
