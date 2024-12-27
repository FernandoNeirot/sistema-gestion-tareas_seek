"use server";

import { usersMock } from "../../shared/mocks";
import { IUser } from "../../shared/_arquitecture/domain/interface";
import { IError, IResponseRandomUserAPI } from "../domain/randomuser.interface";

interface ILoginProps {
  user: string;
  pass: string;
}

export const apiLogin = async ({
  user,
  pass,
}: ILoginProps): Promise<IUser | IError> => {
  try {
    // llamada a una api para validar que el usuario y contraseña sean correctos
    const userData =
      usersMock.find((u) => u.user === user && u.password === pass) ?? null;

    return userData as IUser;
  } catch (error) {
    return {
      code: (error as Response)?.status || 500,
      message: (error as Error)?.message || "Internal Server Error",
    };
  }
};

interface IRandomUserAPI {
  gender: string;
}
export const apiMockDataUser = async ({
  gender,
}: IRandomUserAPI): Promise<IResponseRandomUserAPI | IError> => {
  try {
    const response = await fetch(`https://randomuser.me/api?gender=${gender}`, {
      next: {
        revalidate: 30,
      },
    });

    return await response.json();
  } catch (error) {
    return {
      code: (error as Response)?.status || 500,
      message: (error as Error)?.message || "Internal Server Error",
    };
  }
};
