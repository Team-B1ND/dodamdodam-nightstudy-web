import { useState } from "react";

const useNightStudyModal = () => {
  const [modalInfo, setModalInfo] = useState({isOpen: false, dataId: 0});
  const openModalId = (id: number) => {
    setModalInfo({isOpen:true, dataId:id})
  }

  const closeModal = () => {
    setModalInfo(prev => ({...prev, isOpen:false}))
  }

  return {
    modalInfo,
    openModalId,
    closeModal
  }
}

export default useNightStudyModal