import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { apiTaskByUserId } from "../infrastructure/api.firebase";

export const getTaskByUserId = async () => {
  const response = await apiTaskByUserId();
  return response
    ? response?.sort((a: ITask, b: ITask) => a.status.localeCompare(b.status))
    : null;
};
