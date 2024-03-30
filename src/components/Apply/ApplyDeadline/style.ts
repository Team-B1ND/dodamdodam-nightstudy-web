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

export const ApplyDeadlineInput = styled.input<{ placeholderColor: string }>`
  width: 315px;
  height: 35px;

  padding: 0 13px 0 13px;

  color: ${({ placeholderColor, theme }) =>
    placeholderColor ? theme.contrast : "#929292"};

  background-color: ${({ theme }) => theme.inputColor};
  border: none;
  outline: none;
  border-radius: 8px;

  display: flex;
  align-items: center;

  &::before {
    content: attr(placeholder);
    width: 100%;
  }

  &::-webkit-datetime-edit-text {
    -webkit-appearance: none;
    display: none;
  }
  &::-webkit-datetime-edit-month-field {
    -webkit-appearance: none;
    display: none;
  }
  &::-webkit-datetime-edit-day-field {
    -webkit-appearance: none;
    display: none;
  }
  &::-webkit-datetime-edit-year-field {
    -webkit-appearance: none;
    display: none;
  }
`;
