import { useState } from "react";
// import { IUser } from "@/app/shared/_arquitecture/domain/interface";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false)

  const login = async (user: string, pass: string) => {
    setIsError(false);
    setLoading(true);
    try {
      const response = await fetch("/api/auth", {
        body: JSON.stringify({ user, pass }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
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
