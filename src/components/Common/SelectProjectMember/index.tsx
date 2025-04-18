import { DodamFilledTextField } from "@b1nd/dds-web";
import * as S from "./style";
import { useState } from "react";
import { ApplyProjectNightStudyPram } from "repositories/NightStudy/nightstudy.param";
import MemberItem from "./MemberItem";
import { Student } from "types/Member/member.type";
import { useGetStudentQuery } from "queries/Student/Student.query";

interface Props {
  applyNightStudyData: ApplyProjectNightStudyPram;
  handleProjectMember: (id: number) => void;
}

const SelectProjectMember = ({ applyNightStudyData, handleProjectMember } : Props) => {
  const [memberSearchData, setMemberSearchData] = useState<string>('');
  const { data: MemberList } = useGetStudentQuery({
    suspense: true,
  })

  return (
    <S.SelectProjectMember>
      팀원 선택
      <div style={{padding:"0 8px"}}>
        <S.SelectProjectMemberContainer>
          <S.SelectProjectMemberSearch>
            <DodamFilledTextField
              type="text"
              label=""
              value={memberSearchData}
              onChange={(e) => setMemberSearchData(e.target.value)}
              onRemoveClick={() => setMemberSearchData("")}
              placeholder="이름으로 검색"
            />
            <S.SelectProjectMemberList>
              {MemberList?.data
                .filter((item) => applyNightStudyData.members.indexOf(item.id) === -1)
                .filter((item) => item.name.includes(memberSearchData))
                .sort((a, b) => a.grade - b.grade || a.room - b.room)
                .map((item) => (
                  <MemberItem
                    value={item}
                    pickerStatus={false}
                    key={item.id}
                    onClick={() => handleProjectMember(item.id)}
                  />
                ))}
            </S.SelectProjectMemberList>
          </S.SelectProjectMemberSearch>
          <S.SelectProjectMemberSelected>
            {MemberList?.data
              .filter((item) => applyNightStudyData.members.indexOf(item.id) !== -1)
              .map((item) => (
                <MemberItem
                  value={item}
                  pickerStatus={true}
                  key={item.id}
                  onClick={() => handleProjectMember(item.id)}
                />
              ))}
          </S.SelectProjectMemberSelected>
        </S.SelectProjectMemberContainer>
      </div>
    </S.SelectProjectMember>
  );
};

export default SelectProjectMember;
