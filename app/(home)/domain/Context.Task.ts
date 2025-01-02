import { createContext, useContext } from "react";

interface ITaskContext {
  reloadoData: () => void;
}

export const TaskContext = createContext<ITaskContext | null>(null);

export function useTasks() {
  return useContext(TaskContext);
}