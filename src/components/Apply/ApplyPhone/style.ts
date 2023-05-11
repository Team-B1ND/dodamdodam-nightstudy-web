import styled from "styled-components";

export const ApplyPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ApplyPhoneFlex = styled.div`
  display: flex;

  column-gap: 9px;
`;

export const ApplyPhoneCheckBox = styled.input`
  width: 17px;
  height: 17px;

  background-color: #f0f0f0;
  border-radius: 4px;
`;

export const ApplyPhoneCheckInput = styled.textarea`
  width: 314px;
  height: 101px;

  margin-top: 5px;

  padding: 11px 13px;

  background: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.contrast};

  border-radius: 5px;

  outline: none;
  border: none;
  resize: none;
`;
