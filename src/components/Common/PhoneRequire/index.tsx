import * as S from "./style";
import { ChangeEvent } from "react";
import { DodamCheckBox, DodamDivider } from "@b1nd/dds-web";
import { ApplyNightStudyParam } from "repositories/NightStudy/nightstudy.param";

interface Props {
  applyNightStudyData: ApplyNightStudyParam;
  handleChangeNeedPhone: (type: "place" | "doNeedPhone") => void;
  handleChangeReasonForPhone: (
    e: ChangeEvent<HTMLTextAreaElement>,
    type: "content" | "reasonForPhone"
  ) => void;
}

const PhoneRequire = ({
  applyNightStudyData,
  handleChangeNeedPhone,
  handleChangeReasonForPhone,
}: Props) => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Box>
          <S.Title>핸드폰 필요여부</S.Title>
          <S.PhoneRequireInfo>
            <S.PhoneCheckWrap>
              <p>핸드폰이 필요하신가요?</p>
              <DodamCheckBox
                isDisabled={applyNightStudyData.doNeedPhone}
                onClick={() => handleChangeNeedPhone("doNeedPhone")}
              />
            </S.PhoneCheckWrap>
            <span>
              체크하셨다면 사유를 꼭 적어주세요
            </span>
            <S.PhoneReason
              disabled={!applyNightStudyData.doNeedPhone}
              placeholder={
                applyNightStudyData.doNeedPhone
                  ? "핸드폰이 필요한 사유를 적어주세요."
                  : "핸드폰 사용 여부를 먼저 체크해주세요."
              }
              onChange={(e) =>
                handleChangeReasonForPhone(e, "reasonForPhone")
              }></S.PhoneReason>
          </S.PhoneRequireInfo>
        </S.Box>
      </S.Wrap>
    </S.Container>
  );
};

export default PhoneRequire;
