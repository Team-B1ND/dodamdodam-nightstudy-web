import { DodamFilledButton } from "@b1nd/dds-web"
import useManageNightStudy from "hooks/NightStudy/ManageNightStudy/useManageNightStudy";
import styled from "styled-components";

interface StatusControllerProps {
  type: "PERSONAL" | "PROJECT" | "BAN";
  isObjectSelected: boolean;
  pageData: string;
  selectedIds: number[];
  openRejectModal: (id: number) => void; 
}

const StatusController = ({type, isObjectSelected, pageData = "PENDING", selectedIds, openRejectModal}: StatusControllerProps) => {
  const {allowNightStudy, revertNightStudy} = useManageNightStudy();
  return pageData === "PENDING" ? (
    <ControllerContainer>
      <DodamFilledButton
        size="Medium"
        text="일괄 수락"
        width={144}
        customStyle={{color:"#fff"}}
        backgroundColorType="Primary"
        enabled={isObjectSelected}
        onClick={() => selectedIds.forEach(item => allowNightStudy(item))}
      />
    </ControllerContainer>
  ) : (
    <ControllerContainer>
      <DodamFilledButton
        size="Medium"
        text="일괄 승인 취소"
        width={144}
        customStyle={{color:"#fff"}}
        backgroundColorType="Negative"
        enabled={isObjectSelected}
        onClick={() => selectedIds.forEach(item => revertNightStudy(item))}
      />
    </ControllerContainer>
  )
}

const ControllerContainer = styled.div`
  display: flex;
  gap: 8px;
`
export default StatusController