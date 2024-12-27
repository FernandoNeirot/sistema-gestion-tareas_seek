export interface IUser {
  id: number;
  name?: string;
  avatar?: string;
  user: string;
  password: string;
  gender: "female" | "male";
}
