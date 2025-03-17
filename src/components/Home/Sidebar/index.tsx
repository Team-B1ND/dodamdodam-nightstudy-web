import * as S from "./style";
import { useState } from "react";
import { DodamSegmentedButton } from "@b1nd/dds-web";
import MyNightStudy from "../../Common/MyNightStudy";
import { useGetMyNightStudyQuery } from "../../../queries/NightStudy/nightstudy.query";

interface PageDataType {
  text: string;
  isAtv: boolean;
}

const Sidebar = () => {
  const { data: MyNightStudyData } = useGetMyNightStudyQuery();
  const myPendingData = MyNightStudyData?.data.filter((item) => item.status === "PENDING");
  const myAllowData = MyNightStudyData?.data.filter((item) => item.status === "ALLOWED");

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
        {pageData.some((item) => item.text === "대기중" && item.isAtv) ? (
          <MyNightStudy type="Pending" myNightStudyData={myPendingData!} />
        ) : (
          <MyNightStudy type="Allow" myNightStudyData={myAllowData!} />
        )}
      </S.Wrap>
    </S.Container>
  );
};

export default Sidebar;
