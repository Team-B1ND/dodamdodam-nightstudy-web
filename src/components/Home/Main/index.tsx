import * as S from "./style";
import { DodamSegmentedButton } from "@b1nd/dds-web";
import PersonalNightStudy from "components/Common/PersonalNightStudy";
import ProjcetNightStudy from "components/Common/ProjectNightStudy";
import { SetStateAction, useState } from "react";

interface Props {
  isPersonalPage: boolean;
  setIsPersonalPage: React.Dispatch<SetStateAction<boolean>>
}

interface PageDataType {
  text: string;
  isAtv: boolean;
}

const Main = ({ isPersonalPage, setIsPersonalPage }: Props) => {
  const [pageData, setPageData] = useState<PageDataType[]>([
    { text: '개인', isAtv: isPersonalPage },
    { text: '프로젝트', isAtv: !isPersonalPage }
  ])

  const handleClickPage = (text?: string) => {
    setPageData((prev) =>
      prev.map((item) => ({ ...item, isAtv: item.text === text }))
    );
    setIsPersonalPage(text === "개인" ? true : false);
  };
  
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
