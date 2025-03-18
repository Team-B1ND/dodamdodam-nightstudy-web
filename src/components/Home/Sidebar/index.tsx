import * as S from "./style";
import { Suspense, useState } from "react";
import { DodamErrorBoundary, DodamSegmentedButton } from "@b1nd/dds-web";
import MyNightStudy from "../../Common/MyNightStudy";
import MyNightStudyFallback from "../../Common/Fallback/MyNightStudyFallback";

interface PageDataType {
  text: string;
  isAtv: boolean;
}

const Sidebar = () => {
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
    <S.Container>
      <S.Title>My 신청</S.Title>
      <S.Wrap>
        <DodamSegmentedButton
          num={pageData.length}
          type="block"
          data={pageData}
          onClick={handleClickPage}
        />
        <DodamErrorBoundary text="에러 발생" showButton={true}>
          <Suspense fallback={<MyNightStudyFallback />}>
            {pageData.some((item) => item.text === "대기중" && item.isAtv) ? (
              <MyNightStudy type="Pending" />
            ) : (
              <MyNightStudy type="Allow" />
            )}
          </Suspense>
        </DodamErrorBoundary>
      </S.Wrap>
    </S.Container>
  );
};

export default Sidebar;
