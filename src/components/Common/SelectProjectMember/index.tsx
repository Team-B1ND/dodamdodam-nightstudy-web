import { DodamFilledTextField } from "@b1nd/dds-web";
import * as S from "./style";
import { useState } from "react";
import { ApplyProjectNightStudyParam } from "repositories/NightStudy/nightstudy.param";
import MemberItem from "./MemberItem";
import { useGetStudentQuery } from "queries/Student/Student.query";
import { filterStudent } from "utils/Student/filterStudent";

interface Props {
  applyNightStudyData: ApplyProjectNightStudyParam;
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
              {filterStudent(MemberList!.data, applyNightStudyData.students, "id", false, "isBanned")
                .filter((item) => item.name.includes(memberSearchData))
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
            {filterStudent(MemberList!.data, applyNightStudyData.students, "id", true, "isBanned")
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
