export interface IUser {
  id: number;
  name?: string;
  avatar?: string;
  user: string;
  password: string;
  gender: "female" | "male";
}
export interface ITask {
  id?: string;
  title: string;
  description: string;
  status: "eliminada" | "por hacer" | "en progreso" | "completada";
  userId: number;
}

export interface IResponseLogin {
  isAuth: boolean
  error: string | null
}