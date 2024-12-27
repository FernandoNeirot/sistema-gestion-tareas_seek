import { apiTask } from "../infrastructure/task.api";

export const getTask = async () => {
  const response = await apiTask();
  return response;
};