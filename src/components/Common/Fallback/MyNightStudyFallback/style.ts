import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const Container = styled.div`
  width: 100%;
  height: min-content;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.fillNormal};
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 26px 22px;
  gap: 30px;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
`;

export const Tag = styled.div`
  width: 65px;
  height: 100%;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.fillNeutral};
  ${skeletonAnimtaion}
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const Content = styled.div`
  width: 100%;
  height: 24px;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.fillNeutral};
  ${skeletonAnimtaion}
`;

export const DateWrap = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
`;

export const Date = styled.div`
  width: 110px;
  height: 27px;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.fillNeutral};
  ${skeletonAnimtaion}
`;
