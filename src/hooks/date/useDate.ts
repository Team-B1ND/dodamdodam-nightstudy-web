const useDate = () => {
  const currentDate = new Date(); //오늘 날짜
  const limitDate = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000); //2주 뒤 날짜
  const handleLimitDate = limitDate.toISOString().split("T")[0];
  return {
    handleLimitDate,
  };
};

export default useDate;
