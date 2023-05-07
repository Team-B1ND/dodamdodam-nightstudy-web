import styled from "styled-components";

export const ApplyDaedlineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ApplyDeadlineFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

export const ApplyDeadlineBox = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 5px;
`;

export const ApplyDeadlineInput = styled.input`
  width: 315px;
  height: 35px;

  padding-left: 13px;
  padding-right: 13px;

  background-color: ${({ theme }) => theme.inputColor};
  border: none;
  outline: none;
  border-radius: 8px;
`;
