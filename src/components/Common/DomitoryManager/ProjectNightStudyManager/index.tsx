import useSearchBar from "hooks/NightStudy/useSearchBar";
import SearchBar from "../SearchBar"
import DataTable from "../DataTable";
import dateTransform from "utils/Transform/dateTransform";
import { DodamFilledButton } from "@b1nd/dds-web";

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