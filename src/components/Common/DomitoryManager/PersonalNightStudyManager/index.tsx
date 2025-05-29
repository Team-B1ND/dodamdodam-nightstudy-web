import useSearchBar from "hooks/NightStudy/useSearchBar"
import SearchBar from "../SearchBar"

const PersonalNightStudyManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("PERSONAL");
  
  return (
    <div>
      <SearchBar
        searchInputData={searchInputData}
        searchTagData={searchTagData}
        handleInput={handleInput}
        handleTagSelect={handleTagSelect}
      />
    </div>
  )
}

export default PersonalNightStudyManager