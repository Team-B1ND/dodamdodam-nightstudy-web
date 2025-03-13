import * as S from "./style";
import ApplyPeriod from "../../Common/ApplyPeriod";
import PhoneRequire from "../../Common/PhoneRequire";
import StudyInfo from "../../Common/StudyInfo";
import { DodamDivider } from "@b1nd/dds-web";

const Main = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.ApplyInfo>
          <ApplyPeriod />
          <PhoneRequire />
        </S.ApplyInfo>
        <DodamDivider type="Small" />
        <StudyInfo />
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
