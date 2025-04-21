import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useQuery, UseQueryOptions } from "react-query";
import studentRepository from "repositories/Student/student.repository";
import { StudentResponse } from "types/Member/member.type";

export const useGetStudentQuery = (
  options?: UseQueryOptions<
    StudentResponse,
    AxiosError,
    StudentResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.student.getStudent,
    () => studentRepository.getStudents(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );