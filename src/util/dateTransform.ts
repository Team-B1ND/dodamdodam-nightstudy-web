import dayjs from "dayjs";

export const DateTransform = (date?: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};
