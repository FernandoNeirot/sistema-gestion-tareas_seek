export interface IUser {
  id: number;
  name?: string;
  avatar?: string;
  user: string;
  password: string;
  gender: "female" | "male";
}
export interface ITask {
  id: number;
  title: string;
  description: string;
  status: "eliminada" | "por hacer" | "en progreso" | "completada";
}