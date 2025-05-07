import { Avatar, CheckmarkCircleFilled, CheckmarkCircleLine } from "@b1nd/dds-web";
import * as S from './style'
import { Student } from "types/Member/member.type";

interface MemberItemProps {
  value: Student;
  pickerStatus: boolean;
  onClick: (id:number) => void;
}

const MemberItem = ({value, pickerStatus, onClick}: MemberItemProps) => {
  const { name, id, grade, room, profileImage } = value

  return (
    <S.MemberItemContainer>
      <S.MemberInfoContainer>
        {profileImage ?
        <S.MemberItemProfileImage src={profileImage}/> : <Avatar size="large"/>
        }
        <S.MemberInfo>
          {name}
          <p>{grade}-{room}</p>
        </S.MemberInfo>
      </S.MemberInfoContainer>
      <div
        onClick={() => onClick(id)}
        style={{ cursor:'pointer' }}
      >
        {pickerStatus
          ? <CheckmarkCircleFilled color="primaryNormal"/>
          : <CheckmarkCircleLine color="lineNormal"/>} 
      </div>
    </S.MemberItemContainer>
  )
}

export default MemberItem