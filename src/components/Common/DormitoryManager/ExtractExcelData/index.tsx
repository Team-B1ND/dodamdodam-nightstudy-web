import { DodamTypography } from "@b1nd/dds-web";
import * as ExcelJS from "exceljs";
import { RiFileExcel2Line } from "react-icons/ri";
import styled from "styled-components";

type ExcelRowData = Record<string, string | number | boolean | null | undefined>;

interface ExtractExcelDataProps {
  excelData: ExcelRowData[];
  fileName: string;
  sheetName?: string;
  separateByGrade?: boolean;
}

const ExtractExcelData = ({
  excelData,
  fileName,
  sheetName = "Sheet1",
  separateByGrade = false,
}: ExtractExcelDataProps) => {
  //학년 정보 추출
  const extractGrade = (item: ExcelRowData): string => {
    const classNumber = String(item["학번"] || "");
    if (classNumber.length >= 1) {
      return classNumber.charAt(0);
    }
    return "미분류";
  };

  //학년별로 데이터를 그룹화
  const groupByGrade = (data: ExcelRowData[]) => {
    const grouped: Record<string, ExcelRowData[]> = {};

    data.forEach((item) => {
      const grade = extractGrade(item) === "3" ? "2" : extractGrade(item);
      if (!grouped[grade]) {
        grouped[grade] = [];
      }
      grouped[grade].push(item);
    });

    return grouped;
  };

  const createStyledWorksheet = (
    workbook: ExcelJS.Workbook,
    data: ExcelRowData[],
    worksheetName: string
  ) => {
    const worksheet = workbook.addWorksheet(worksheetName);

    if (data.length === 0) {
      return worksheet;
    }

    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);

    //데이터 행 추가
    data.forEach((item: ExcelRowData) => {
      const row = headers.map((header) => String(item[header] ?? ""));
      worksheet.addRow(row);
    });

    const totalRows = data.length + 1;
    const totalCols = headers.length;

    //헤더 스타일링
    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell:any) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "EBEBEB" },
      };
      cell.font = {
        bold: true,
        size: 12,
      };
      cell.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      cell.border = {
        top: { style: "thin", color: { argb: "FF000000" } },
        left: { style: "thin", color: { argb: "FF000000" } },
        bottom: { style: "thin", color: { argb: "FF000000" } },
        right: { style: "thin", color: { argb: "FF000000" } },
      };
    });

    //데이터 행 스타일링
    for (let rowIndex = 2; rowIndex <= totalRows; rowIndex++) {
      const row = worksheet.getRow(rowIndex);
      for (let colIndex = 1; colIndex <= totalCols; colIndex++) {
        const cell = row.getCell(colIndex);

        cell.border = {
          top: { style: "thin", color: { argb: "FF000000" } },
          left: { style: "thin", color: { argb: "FF000000" } },
          bottom: { style: "thin", color: { argb: "FF000000" } },
          right: { style: "thin", color: { argb: "FF000000" } },
        };

        cell.alignment = {
          vertical: "middle",
          horizontal: "center",
        };
      }
    }

    //칼럼 너비 자동 조정
    worksheet.columns.forEach((column:any, index:number) => {
      const header = headers[index];
      let maxLength = header.length;

      data.forEach((item: ExcelRowData) => {
        const cellValue = String(item[header] ?? "");
        if (cellValue.length > maxLength) {
          maxLength = cellValue.length;
        }
      });

      if (column) {
        column.width = Math.min(Math.max(maxLength + 2, 10), 50);
      }
    });

    return worksheet;
  };

  const handleDownload = async () => {
    try {
      const workbook = new ExcelJS.Workbook();

      if (excelData.length === 0) {
        alert("다운로드할 데이터가 없습니다.");
        return;
      }

      if (separateByGrade) {
        //학년 별로 데이터 그룹화
        const groupedData = groupByGrade(excelData);
        const grades = Object.keys(groupedData).sort();

        if (grades.length === 0) {
          alert("학년 정보를 찾을 수 없습니다.");
          return;
        }

        //각 학년별로 시트 생성
        grades.forEach((grade) => {
          const gradeData = groupedData[grade];
          const worksheetName = `${grade === "2" ? "2, 3학년" : grade === "1" ? "1학년" : "학년 미확인"}`;
          createStyledWorksheet(workbook, gradeData, worksheetName);
        });
      } else {
        createStyledWorksheet(workbook, excelData, sheetName);
      }

      //파일 생성 및 다운로드
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.xlsx`;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Excel 파일 생성 중 오류:", error);
      alert("Excel 파일 생성에 실패했습니다.");
    }
  };

  return (
    <ExcelButton onClick={handleDownload}>
      <RiFileExcel2Line size={16} />
      <span>다운로드</span>
    </ExcelButton>
  );
};

export default ExtractExcelData;

const ExcelButton = styled.button`
  width: 95px;
  height: 35px;
  border: none;
  border-radius: 5px;
  padding: 3px;
  ${DodamTypography.Caption1.Bold}
  color: #fff;
  background-color: ${({ theme }) => theme.statusPositive};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  transform: scale(1);
  transition: all 0.18s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    transform: scale(0.97);
  }
`;
