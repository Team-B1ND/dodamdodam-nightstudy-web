import Main from "components/Home/Main";
import Sidebar from "components/Home/Sidebar";
import * as S from "./style";
import { useState } from "react";

const HomePage = () => {
  const [ isPersonalPage, setIsPersonalPage ] = useState(true);
  return (
    <S.Container>
      <Main isPersonalPage={isPersonalPage} setIsPersonalPage={setIsPersonalPage}/>
      <Sidebar isPersonalPage={isPersonalPage} />
    </S.Container>
  );
};

export default HomePage;
