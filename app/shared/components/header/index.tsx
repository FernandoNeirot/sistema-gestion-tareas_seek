import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IUser } from "../../_arquitecture/domain/interface";

interface HeaderProps {
  user: IUser;
}

export const Header = ({ user }: HeaderProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <header className="bg-blue-500 text-white justify-around items-center w-full p-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="w-auto">Mis tareas</h1>
        <div className="flex items-center">
          <p>
            Bienvenid{user.gender === "male" ? "o" : "a"}, {user.name}
          </p>
          <Image
            src={user?.avatar ?? ""}
            alt={`Avatar of ${user.name}`}
            className="ml-2 rounded-full w-12"
            width={48}
            height={48}
          />
        </div>
      </div>
    </header>
  );
};
