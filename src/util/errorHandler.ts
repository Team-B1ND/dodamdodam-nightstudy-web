import { B1ndToast } from "@b1nd/b1nd-toastify";

const errorHandler = (status: number) => {
  switch (status) {
    case 400:
      B1ndToast.showError("유효한 Enum 값이 아닙니다");
      break;
    case 403:
      B1ndToast.showError("이미 신청된 심자가 존재합니다");
      break;
    case 500:
      B1ndToast.showError("서버 에러");
      break;
    default:
      B1ndToast.showError("심자 신청에 실패하였습니다");
      break;
  }
};

export default errorHandler;
