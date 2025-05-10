interface filterProps {
  (data: Array<any>,
  includeCompareData: Array<any>,
  includeCompareAttributes: string,
  isInclude: boolean,
  falseAttributes: string): Array<any>
}

export const filterStudent: filterProps = (
  data,
  includeCompareData,
  includeCompareAttributes,
  isInclude,
  falseAttributes
) => {
  data = data
    .filter((item) => item[falseAttributes] === false)
    .filter((item) =>
      isInclude
        ? includeCompareData.indexOf(item[includeCompareAttributes]) !== -1
        : includeCompareData.indexOf(item[includeCompareAttributes]) === -1
    )
    .sort((a, b) => a["grade"] - b["grade"] || a["room"] - b["room"]);

  return data;
};
