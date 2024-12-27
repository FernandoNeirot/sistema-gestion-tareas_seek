import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { mockTaks } from "@/app/shared/mocks";

export const apiTask = ():ITask[] => {
  return mockTaks;
}