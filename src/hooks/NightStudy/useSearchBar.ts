import { SEARCH_BAR_DATA, searchBarDataName } from "constants/ManageSearchTag/manageSearchTag";
import { useState } from "react"

interface searchTagType {
  text: string;
  isSelected: boolean;
  value: string;
}

export interface searchTagObject {
  name: string;
  tags: searchTagType[];
}

const useSearchBar = (type: searchBarDataName) => {
  const [searchInputData, setSearchInputData] = useState<string>("");
  const [searchTagData, setSearchTagData] = useState<searchTagObject[]>(SEARCH_BAR_DATA.find(item => item.name === type)!.data);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputData(e.target.value);
  }

  const handleTagSelect = (name: string, tagText: string) => {
    setSearchTagData((prev) =>
      prev?.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            tags: item.tags.map((tag) => ({
              ...tag,
              isSelected: tag.text === tagText
            }))
          };
        }
        return item;
      })
    );
  }

  return {
    searchInputData,
    searchTagData,
    setSearchInputData,
    setSearchTagData,
    handleTagSelect,
    handleInput
  }
}

export default useSearchBar