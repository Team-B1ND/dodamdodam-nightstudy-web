import { DodamSegmentedButton, DodamShape } from '@b1nd/dds-web';
import { useChangePage } from 'hooks/NightStudy/useChangePage';
import styled from 'styled-components';
import PersonalNightStudyManager from './PersonalNightStudyManager';
import ProjectNightStudyManager from './ProjectNightStudyManager';
import NightStudyBanManager from './NightStudyBanManager';

const DormitoryManager = () => {
  const { handleClickPage, pageData } = useChangePage([
    { text: '일반 심자', isAtv: true },
    { text: '프로젝트 관리', isAtv: false },
    { text: '심자정지', isAtv: false }
  ])

  return (
    <ManagerWarp>
      <ManagerContainer>
        <DodamSegmentedButton
            num={3}
            type="block"
            data={pageData}
            width={400}
            height={48}
            onClick={handleClickPage}
          />
          {pageData.find(item => item.isAtv === true)?.text === "일반 심자"
          ? <PersonalNightStudyManager/>
          : pageData.find(item => item.isAtv === true)?.text === "프로젝트 관리"
            ? <ProjectNightStudyManager/>
            : <NightStudyBanManager/> }
      </ManagerContainer>
    </ManagerWarp>
  )
}

const ManagerWarp = styled.div`
  padding: 58px 32px 58px 16px;
  width: 100%;
  height: 100%;

  @media (max-width: 1069px) {
  padding: 58px 32px;
  }
`
const ManagerContainer = styled.div`
  ${DodamShape.Large};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 24px;
  gap: 12px;
  height: 100%;
`

export default DormitoryManager