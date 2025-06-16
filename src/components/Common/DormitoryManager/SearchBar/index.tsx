import { Magnifyingglass } from "@b1nd/dds-web";
import * as S from  "./style";
import { searchTagObject } from "hooks/NightStudy/useSearchBar";
import { Select } from "components/Common/Select";

interface SearchBarProps {
  searchInputData: string;
  searchTagData: searchTagObject[];
  handleTagSelect: (name: string, tagText: string) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (
  {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  }: SearchBarProps
) => {
  return (
    <S.SearchBarContainer>
      <S.SearchBarInputContainer>
        <Magnifyingglass size={24} color="labelAssistive"/>
        <input
          placeholder="검색어를 입력해주세요."
          type="text"
          onChange={handleInput}
          value={searchInputData}
        />
      </S.SearchBarInputContainer>
      <S.SearchBarTagContainer>
        {searchTagData.map((item) => (
          <Select
            items={item.tags.map(tags => tags.text)}
            value={item.tags.find(tags => !!tags.isSelected)?.text || item.tags[0].text}
            onSelectedItemChange={(text) => handleTagSelect(item.name, text)}
            key={item.name}
          />
          ))
        }
      </S.SearchBarTagContainer>
    </S.SearchBarContainer>
  )
}

export default SearchBar