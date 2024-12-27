import { apiMockDataUser } from "../infrastructure/user.api";

export const getUserData = async (gender: string) => {

  const response = await apiMockDataUser({gender});
  
  return response;
};