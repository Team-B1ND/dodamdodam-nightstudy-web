import { DodamFilledButton } from '@b1nd/dds-web';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import studentRepository from 'repositories/Student/student.repository';

const GoDomitoryManagePageButton = () => {
  const navigate = useNavigate();
  // const [isDomitoryManageMember, setIsDomitoryManageMember] = useState<boolean>();
  // const getDomitoryManageMemberCheckData = async () => {
  //   await studentRepository.checkDomitoryManager()
  //   .then((data) => (
  //     setIsDomitoryManageMember(data)
  //   ))
  // }

  // useEffect(() => {
  //   getDomitoryManageMemberCheckData()
  // }, [])

  return (
    <DodamFilledButton size="Large" text="심자 관리하러 가기" backgroundColorType="Secondary" onClick={() => navigate("/domitory-manage")}/>
  )
}

export default GoDomitoryManagePageButton