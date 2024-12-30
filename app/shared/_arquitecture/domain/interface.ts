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
  status: "4 - eliminada" | "1 - por hacer" | "2 - en progreso" | "3 - completada";
  userId: number;
}

export interface IResponseLogin {
  isAuth: boolean
  error: string | null
}