"use server";
import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { updateDocFirebase } from "../infrastructure/api.firebase";
interface IProps {
  task: ITask;
}
export const deleteTask = async ({ task }: IProps) => {
  const taskDelete = { ...task, status: "eliminada" } as ITask;
  const response = await updateDocFirebase("TASKS", taskDelete, taskDelete.id)
    .then(() => true)
    .catch(() => false);
  return response;
};
