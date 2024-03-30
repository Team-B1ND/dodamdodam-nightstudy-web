import styled from "styled-components";

export const ApplyPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ApplyPlaceFlex = styled.div`
  display: flex;
  align-items: center;

  column-gap: 7px;
`;

export const ApplyPlaceBox = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 17px;
`;

export const ApplyResonBox = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 5px;
`;

export const ApplyStudyContentBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ApplyStudyContentInput = styled.textarea`
  width: 788px;
  height: 150px;

  padding: 11px 13px;
  background: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.contrast};
  border-radius: 8px;

  outline: none;
  border: none;
  resize: none;
`;

export const ApplyReasonInput = styled.input`
  width: 788px;
  height: 35px;

  padding-left: 13px;

  background: #f0f0f0;
  border-radius: 8px;

  outline: none;
  border: none;
`;

export const ApplyPlaceNameBox = styled.div`
  width: 80%;
  height: 45px;

  display: flex;
  flex-wrap: wrap;

  padding-left: 13px;

  row-gap: 12px;
  column-gap: 50px;
`;

export const ApplyStudyRoomBox = styled.div`
  display: flex;
  column-gap: 4px;

  width: 150px;
  height: 17px;
`;

export const ApplyPlaceCheckBox = styled.input`
  width: 15px;
  height: 15px;

  background: ${({ theme }) => theme.inputColor};
  border-radius: 4px;
  cursor: pointer;
`;

export const ApplyPlaceName = styled.label`
  font-weight: 400;
  font-size: 14px;

  color: ${({ theme }) => theme.contrast};
`;
