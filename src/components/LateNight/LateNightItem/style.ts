import styled from "styled-components";

export const LateNightContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 17px;
  margin-top: 61px;
`;

export const LateNightItemContainer = styled.div`
  display: flex;
`;

export const LateNightItemBox = styled.div`
  position: relative;
  width: 500px;
  height: 81px;

  display: flex;
  align-items: center;
  padding-left: 25px;

  background: ${({ theme }) => theme.backgroundColor2};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const LateNightProfile = styled.img`
  width: 45px;
  height: 45px;

  border-radius: 100%;
  object-fit: cover;
`;

export const LateNightInfoBox = styled.div`
  width: 271px;
  height: 37px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: 4px;
  margin-left: 23px;
`;

export const LateNightUserInfoBox = styled.div`
  display: flex;

  column-gap: 6px;
`;

export const LateNightName = styled.p`
  font-weight: 600;
  font-size: 16px;

  color: ${({ theme }) => theme.contrast};
`;

export const LateNightUserGrade = styled.p`
  font-weight: 500;
  font-size: 12px;

  background: linear-gradient(96.13deg, #2272ff 48.26%, #2460b9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  margin-top: 4px;
`;

export const LateNightDate = styled.p`
  font-weight: 400;
  font-size: 12px;

  color: #6d6d6d;
`;

export const LateNightAllow = styled.p<{
  status: string;
}>`
  font-weight: 700;
  font-size: 16px;

  color: ${({ status, theme }) =>
    status === "ALLOWED" ? "#07C303" : status === "DENIED" ? "red" : "#FFA740"};
`;

export const LateNightDelBtn = styled.div`
  width: 30px;
  height: 30px;

  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.contrast};

  cursor: pointer;
`;
