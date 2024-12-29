import { apiIsAuth } from "../infrastructure/api.auth";

export const getIsAuth = async () => {
  try {
    const response = await apiIsAuth();
    return response;
  } catch (e) {
    console.log(e);
  }
}