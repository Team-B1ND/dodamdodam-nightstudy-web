import * as S from "./style";
import { Suspense, useState } from "react";
import { DodamErrorBoundary, DodamSegmentedButton } from "@b1nd/dds-web";
import MyNightStudy from "components/Common/MyNightStudy";
import MyNightStudyFallback from "components/Common/Fallback/MyNightStudyFallback";
import IsBannedChecker from "components/Common/IsBannedChecker";
import IsBannedCheckerFallback from "components/Common/Fallback/IsBannedCheckerFallback";

interface PageDataType {
  text: string;
  isAtv: boolean;
}

const Sidebar = ({ isPersonalPage }: { isPersonalPage: boolean }) => {
  const [pageData, setPageData] = useState<PageDataType[]>([
    { text: "대기중", isAtv: true },
    { text: "승인됨", isAtv: false },
  ]);

  const handleClickPage = (text?: string) => {
    setPageData((prev) =>
      prev.map((item) => ({ ...item, isAtv: item.text === text }))
    );
  };

  return (
    <S.SideBarContainer>
      <Suspense fallback={<IsBannedCheckerFallback/>}>
        <IsBannedChecker/>
      </Suspense>
      <S.Container>
        <S.Title>My {isPersonalPage ? "개인 심자" : "프로젝트 심자"} 신청</S.Title>
        <S.Wrap>
          <DodamSegmentedButton
            num={pageData.length}
            type="block"
            data={pageData}
            onClick={handleClickPage}
          />
          <DodamErrorBoundary text="에러 발생" showButton={true}>
            <Suspense fallback={<MyNightStudyFallback length={3} />}>
              {pageData.some((item) => item.text === "대기중" && item.isAtv) ? (
                <MyNightStudy type="Pending" isPersonalPage={isPersonalPage}/>
              ) : (
                <MyNightStudy type="Allow" isPersonalPage={isPersonalPage}/>
              )}
            </Suspense>
          </DodamErrorBoundary>
        </S.Wrap>
      </S.Container>
    </S.SideBarContainer>
  );
};

export default Sidebar;
