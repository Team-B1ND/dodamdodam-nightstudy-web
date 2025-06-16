import { DodamFilledButton } from '@b1nd/dds-web';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import studentRepository from 'repositories/Student/student.repository';

const GoDormitoryManagePageButton = () => {
  const navigate = useNavigate();
  const [isDormitoryManageMember, setIsDormitoryManageMember] = useState<boolean>();
  const getDormitoryManageMemberCheckData = async () => {
    await studentRepository.checkDormitoryManager()
    .then((data) => (
      setIsDormitoryManageMember(data)
    ))
  }

  useEffect(() => {
    getDormitoryManageMemberCheckData()
  }, [])

  return isDormitoryManageMember ? (
    <DodamFilledButton size="Large" text="심자 관리하러 가기" backgroundColorType="Secondary" onClick={() => navigate("/dormitory-manage")}/>
  ) : (
    <></>
  )
}

export default GoDormitoryManagePageButton