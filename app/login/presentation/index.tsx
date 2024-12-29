"use client";

import ButtonComponent from "@/app/shared/components/button";
import InputComponent from "@/app/shared/components/Input";
import Loading from "@/app/shared/components/loading";
import { useEffect, useState } from "react";
import useLogin from "../application/useLogin";

export default function LoginPageClient() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { isError, loading, login, isAuth } = useLogin();

  const handleLogin = async () => {
    login(user, pass);
  };
  useEffect(() => {
    if (isAuth) window.location.assign("/");
  }, [isAuth]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen mx-5">
      <div className="relative w-full max-w-[400px] min-h-[200px] border-spacing-0 border border-blue-200 p-2 bg-blue-900">
        {loading && <Loading />}
        <p className=" text-center text-white p-5">Ingreso al sistema</p>
        <InputComponent
          name="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
        />
        <InputComponent
          name="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Clave"
        />
        {isError && (
          <p className=" w-full text-center text-red-400 py-2">
            Error de credenciales
          </p>
        )}
        <div className="flex justify-center mt-5">
          <ButtonComponent
            onClick={() => (!loading ? handleLogin() : {})}
            text="Ingresar"
            isLoading={loading}
          />
        </div>
      </div>
    </div>
  );
}
