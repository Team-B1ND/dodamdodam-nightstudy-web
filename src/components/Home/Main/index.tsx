import * as S from "./style";
import { DodamSegmentedButton } from "@b1nd/dds-web";
import PersonalNightStudy from "components/Common/PersonalNightStudy";
import ProjcetNightStudy from "components/Common/ProjectNightStudy";
import { useChangePage } from "hooks/NightStudy/useChangePage";

interface Props {
  isPersonalPage: boolean;
  setIsPersonalPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({ isPersonalPage, setIsPersonalPage }: Props) => {
  const { handleClickPage, pageData } = useChangePage([
    { text: '개인', isAtv: isPersonalPage },
    { text: '프로젝트', isAtv: !isPersonalPage }
  ], setIsPersonalPage)
  
  return (
    <S.Container>
      <S.Wrap >
        <DodamSegmentedButton
          num={2}
          type="block"
          data={pageData}
          width={240}
          height={48}
          onClick={handleClickPage}
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
