import { useState } from "react"

interface PageDataType {
  text: string;
  isAtv: boolean;
}

export const useChangePage = (defaultPageData: PageDataType[], setState?: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [pageData, setPageData] = useState<PageDataType[]>(defaultPageData);

  const handleClickPage = (text?: string) => {
    setPageData((prev) => 
      prev.map((item) => ({ ...item, isAtv: item.text === text }))
    );
    if(setState) setState(text === "개인" ? true : false)
  };

  return {
    handleClickPage,
    pageData,
    setPageData
  }
}
