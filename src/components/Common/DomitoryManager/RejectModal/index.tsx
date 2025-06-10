import { DodamFilledButton, DodamTextField } from '@b1nd/dds-web';
import * as S from './style';
import { ChangeEvent, useState } from 'react';
import useManageNightStudy from 'hooks/NightStudy/useManageNightStudy';

interface RejectModalProps {
  type: "REJECT_PROJECT" | "REJECT_NIGHT_STUDY" | "BAN";
  close: () => void;
  dataId: number;
}
const RejectModal = ({type, close, dataId}: RejectModalProps) => {
  const [rejectReason, setRejectReason] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRejectReason(event.target.value);
  };

  const {rejectProject, rejectNightStudy} = useManageNightStudy();

  const handleRejectButton = (type: "REJECT_PROJECT" | "REJECT_NIGHT_STUDY" | "BAN") => {
    if (!rejectReason.trim()) {
      alert("거절 사유를 입력해주세요.");
      return;
    }
    if (type === "REJECT_PROJECT") {
      rejectProject({id: dataId, rejectReason:rejectReason}, close);
    } else if (type === "REJECT_NIGHT_STUDY") {
      rejectNightStudy(dataId, close);
    } else {
      // 밴 기능
    }
  };

  return (
    <S.RejectModalContainer>
      <S.RejectModalData>
        <p>
          {type === "BAN"
            ? "정지 사유를 입력해주세요"
            : "거절 사유를 입력해주세요"}
        </p>
        <DodamTextField
          id="rejectReason"
          name="rejectReason"
          type="text"
          value={rejectReason}
          label="거절 사유"
          width={273}
          onChange={handleChange}
          customStyle={{ marginTop: "20px" }}
        />
      </S.RejectModalData>
      <S.RejectModalButtonContainer>
        <DodamFilledButton
          size={"Large"}
          enabled={true}
          text="취소"
          typography={["Body1", "Medium"]}
          backgroundColorType={"Assisitive"}
          onClick={close}
        />
        <DodamFilledButton
          size={"Large"}
          enabled={rejectReason.trim().length > 0}
          text="확인"
          textTheme={"staticWhite"}
          typography={["Body1", "Medium"]}
          style={{ marginLeft: "8px" }}
          onClick={() => handleRejectButton(type)}
        />
      </S.RejectModalButtonContainer>
    </S.RejectModalContainer>
  );
}

export default RejectModal