import useSearchBar from "hooks/NightStudy/useSearchBar";
import SearchBar from "../SearchBar"

const NightStudyBanManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("BAN");
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

export default NightStudyBanManager