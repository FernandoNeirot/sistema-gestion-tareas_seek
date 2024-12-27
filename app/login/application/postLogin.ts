import { apiLogin } from "../infrastructure/user.api";
import { getUserData } from "./getUserData";

export const postLogin = async (user: string, pass: string) => {
  const response = await apiLogin({ user, pass });
  // si el usuario y contraseña son correctos, se obtiene la información del usuario
  if (response && "gender" in response) {
    const data = await getUserData(response.gender);
    if ("results" in data) {
      response.avatar = data.results[0].picture.medium;
      response.name = `${data.results[0].name.first} ${data.results[0].name.last}`;
    }
  }
  return response;
};
