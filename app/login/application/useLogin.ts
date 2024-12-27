import { useState } from "react";
import { postLogin } from "./postLogin";
import { IUser } from "@/app/shared/_arquitecture/domain/interface";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<IUser | null>(null);

  const login = async (user: string, pass: string) => {
    setIsError(false);
    setLoading(true);
    try {
      const response = await postLogin(user, pass);

      if (!response) setIsError(true);
      else setData(response as IUser);
    } catch {
      setIsError(true);
    }
    setLoading(false);
  };

  return {
    loading,
    isError,
    data,
    login,
  };
};

export default useLogin;
