'use client'

import InputComponent from "@/app/shared/components/Input";
import { useState } from "react";

export default function ClientPage() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-5">
      <div className=" w-full max-w-[400px] min-h-[200px] border-spacing-0 border border-blue-200 p-2 bg-blue-900">
        <p className=" text-center p-5">Ingreso al sistema</p>
        <InputComponent
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
        />
        <InputComponent
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Clave"
        />
      </div>
    </div>
  );
}
