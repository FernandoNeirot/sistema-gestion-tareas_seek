import { useState } from "react";
import { apiLoginNew } from "../infrastructure/user.api";
// import { IUser } from "@/app/shared/_arquitecture/domain/interface";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false)

  const login = async (user: string, pass: string) => {
    setIsError(false);
    setLoading(true);
    try {
      const response = await apiLoginNew({ user, pass });
      if (!response || !response?.isAuth ) setIsError(true);
      else setIsAuth(true);
    } catch {
      setIsError(true);
      setIsAuth(false);
    }
    setLoading(false);
  };

  return {
    loading,
    isError,
    isAuth,
    login,
  };
};

export default useLogin;
