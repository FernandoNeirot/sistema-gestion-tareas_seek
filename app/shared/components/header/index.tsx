'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IUser } from "../../_arquitecture/domain/interface";
import { getIsAuth } from "../../_arquitecture/application/getIsAuth";
import { TbLogout } from "react-icons/tb";
import { removeCookie } from "../../utils/cookies";

export const Header = () => {
  const [userData, setUserData] = useState<IUser|null>(null);
  const [isAuth, setIsAuth] = useState(false);

  const getUserData = async () => {
    const response = await getIsAuth();
    if (response) {
      setIsAuth(response.isAuth);
      setUserData(response.userData);
    }
  };

  const handleCloseSession = async() => {
    await removeCookie("__session-seek").then(() => window.location.reload());
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {isAuth && (
        <header className="bg-blue-500 text-white justify-around items-center w-full p-4">
          <div className="flex justify-between items-center w-full">
            <h1 className="w-auto">Mis tareas</h1>
            <div className="flex items-center">
              <p>
                Bienvenid{userData?.gender === "male" ? "o" : "a"}, {userData?.name}
              </p>
              <Image
                src={userData?.avatar ?? ""}
                alt={`Avatar of ${userData?.name}`}
                className="ml-2 rounded-full w-12"
                width={48}
                height={48}
              />
              <div className="ml-5 cursor-pointer" onClick={handleCloseSession}>
                <TbLogout size={25}/>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
