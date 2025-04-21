import { Avatar, CheckmarkCircleFilled, CheckmarkCircleLine } from "@b1nd/dds-web";
import * as S from './style'
import { Student } from "types/Member/member.type";

interface MemberItemProps {
  value: Student;
  pickerStatus: boolean;
  onClick: (id:number) => void;
}

const MemberItem = ({value, pickerStatus, onClick}: MemberItemProps) => {
  const { name, id, grade, room } = value

  return (
    <S.MemberItemContainer>
      <S.MemberItemProfileImage/>
      <S.MemberInfoContainer>
        {name}
        <p>{grade}-{room}</p>
      </S.MemberInfoContainer>
      <div
        onClick={() => onClick(id)}
        style={{ cursor:'pointer' }}
      >
        {pickerStatus
          ? <CheckmarkCircleFilled color="primaryNormal"/>
          : <CheckmarkCircleLine color="staticWhite"/>} 
      </div>
    </S.MemberItemContainer>
  )
}

export default MemberItem