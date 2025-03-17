import * as S from "./style";
import { useState } from "react";
import { DodamSegmentedButton } from "@b1nd/dds-web";
import ApproveMyNightStudy from "../../Common/MyNightStudy/Approve";
import PenddingMyNightStudy from "../../Common/MyNightStudy/Pendding";

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
        {pageData.some((item) => item.text === "대기중" && item.isAtv) ? (
          <PenddingMyNightStudy />
        ) : (
          <ApproveMyNightStudy />
        )}
      </S.Wrap>
    </S.Container>
  );
};

export default Sidebar;
