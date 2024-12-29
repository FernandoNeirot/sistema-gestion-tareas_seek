'use server'
import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { addDocFirebase } from "../infrastructure/api.firebase";
interface IProps {
  task: ITask;
}
export const postTask = async ({task}:IProps) => {
  const response = await addDocFirebase("TASKS", task).then(() => true).catch(() => false);
  return response
};