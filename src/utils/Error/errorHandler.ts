import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";

class ErrorHandler {
  public applyNightStudy = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 400:
        return B1ndToast.showError("유효한 Enum 값이 아닙니다");
      case 403:
        return B1ndToast.showError("심자 신청 기간이 아닙니다");
      case 409:
        return B1ndToast.showError("이미 신청한 심자가 존재합니다");
      case 500:
        return B1ndToast.showError("서버 에러");
      default:
        return B1ndToast.showError("심자 신청에 실패하였습니다");
    }
  };

  public deleteMyNightStudy = (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 400:
        return B1ndToast.showError("유효한 Enum 값이 아닙니다");
      case 403:
        return B1ndToast.showError("심자 신청자가 아닙니다")
      case 404:
        return B1ndToast.showError("해당 심자가 없습니다")
      case 500:
        return B1ndToast.showError("서버 에러");
      default:
        return B1ndToast.showError("내 심자 삭제에 실패하였습니다");
    }
  };
}

const errorHandler = new ErrorHandler();
export default errorHandler;
