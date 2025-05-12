import * as S from "./style";
import { DodamSegmentedButton } from "@b1nd/dds-web";
import PersonalNightStudy from "components/Common/PersonalNightStudy";
import ProjcetNightStudy from "components/Common/ProjectNightStudy";
import { SetStateAction } from "react";

interface Props {
  isPersonalPage: boolean;
  setIsPersonalPage: React.Dispatch<SetStateAction<boolean>>
}

const Main = ({ isPersonalPage, setIsPersonalPage }: Props) => {
  return (
    <S.Container>
      <S.Wrap >
        <DodamSegmentedButton
          num={2}
          type="block"
          data={[
            { text: '개인', isAtv: isPersonalPage },
            { text: '프로젝트', isAtv: !isPersonalPage }
          ]}
          width={240}
          height={48}
          onClick={() => setIsPersonalPage((prev) => !prev)}
        />
        {isPersonalPage
          ? <PersonalNightStudy isPersonalPage={isPersonalPage}/>
          : <ProjcetNightStudy isPersonalPage={isPersonalPage}/>
        }
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
