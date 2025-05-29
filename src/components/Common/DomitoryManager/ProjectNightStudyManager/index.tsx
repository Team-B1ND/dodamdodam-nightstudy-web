import useSearchBar from "hooks/NightStudy/useSearchBar";
import SearchBar from "../SearchBar"

const ProjectNightStudyManager = () => {
  const {
    searchInputData,
    searchTagData,
    handleTagSelect,
    handleInput
  } = useSearchBar("PROJECT");
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

export default ProjectNightStudyManager