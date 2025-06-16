import {Close, DodamCheckBox, DodamDatePicker, DodamFilledButton, DodamModal} from "@b1nd/dds-web";
import dayjs from "dayjs";
import * as S from './style';
import { NIGHTSTUDY_BAN_REASONS } from "constants/NightStudy/nightStudy.constant";
import useBanStudent from "hooks/NightStudy/ManageNightStudy/useBanStudent";

interface NightStudyBanModalProps {
  isOpen: boolean;
  close: () => void;
  dataId: number
}

const NightStudyBanModal = ({isOpen, close, dataId}: NightStudyBanModalProps) => {
  const {state, setEnded, setReason, setReasonType, createBan} = useBanStudent();
  return (
    <DodamModal isOpen={isOpen} background>
      <S.NightStudyBanContainer>
        <div onClick={close}>
          <Close $svgStyle={{ cursor: 'pointer' }} color='labelNormal'/>
        </div>
        <p>심자정지</p>
        <S.DateInfoBox>
          <p>정지 종료일</p>
          <DodamDatePicker
            itemKey="ended"
            value={state.ended}
            title="정지 만료일"
            color="primaryNormal"
            type="entire"
            customStyle={{border: "none"}}
            onChange={(e: Date) => setEnded(dayjs(e).format("YYYY-MM-DD"))}
          />
        </S.DateInfoBox>
        {
          NIGHTSTUDY_BAN_REASONS.map((item) => (
            <S.BanedReasonWrap>
              <DodamCheckBox isDisabled={item === state.reasonType} onClick={() => {setReasonType(item)}}/>
              <span>{item}</span>
            </S.BanedReasonWrap>
          ))
        }
        {state.reasonType === "기타" && (
          <S.BannedReasonTextArea
            placeholder="정지 사유를 직접 입력해주세요."
            value={state.reason}
            onChange={(e) => setReason(e.target.value)}
          />
        )}
        <S.BannedReasonButtonWrap>
          <DodamFilledButton
            text="심자정지"
            size="Small"
            width={100}
            textTheme="staticWhite"
            onClick={() => {
              createBan({student:dataId, reason:(state.reason || state.reasonType), ended:state.ended});
              close();
            }}
          />
        </S.BannedReasonButtonWrap>
      </S.NightStudyBanContainer>
    </DodamModal>
  )
}

export default NightStudyBanModal;