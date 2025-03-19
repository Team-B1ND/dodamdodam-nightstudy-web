import Main from "src/components/Home/Main";
import Sidebar from "src/components/Home/Sidebar";
import * as S from "./style";

const HomePage = () => {
  return (
    <S.Container>
      <Main />
      <Sidebar />
    </S.Container>
  );
};

export default HomePage;
