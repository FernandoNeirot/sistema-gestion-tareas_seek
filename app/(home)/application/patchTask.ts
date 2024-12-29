'use server'
import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { updateDocFirebase } from "../infrastructure/api.firebase";
interface IProps {
  task: ITask;
}
export const patchTask = async ({task}:IProps) => {  
  const response = await updateDocFirebase("TASKS", task,task.id).then(() => true).catch(() => false);
  return response
};