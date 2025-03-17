import dayjs from "dayjs";

class DateTransform {
  public hyphen(date?: string | Date): string {
    return dayjs(date).format("YYYY-MM-DD");
  }
  public monthDay(date?: string): string {
    return dayjs(date).format("MM월 DD일");
  }
}

const dateTransform = new DateTransform();
export default dateTransform;
