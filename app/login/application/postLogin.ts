import { apiLogin } from "../infrastructure/user.api";
import { getUserData } from "./getUserData";

export const postLogin = async (user: string, pass: string) => {
  const response = await apiLogin({ user, pass });
  if (response && "gender" in response) {
    const data = await getUserData(response.gender);
    if ("results" in data) {
      response.avatar = data.results[0].picture.large;
      response.name = data.results[0].name.first;
    }
  }
  return response;
};
