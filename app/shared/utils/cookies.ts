'use server'
import { cookies } from "next/headers";

export const removeCookie = async (name: string) => {
  (await cookies()).set({
    name,
    value: "",
    expires: new Date(Date.now() - 10000),
    httpOnly: false,
    path: "/",
  });
};

export const getCookies = async (name: string) => {
  return (await cookies()).get(name)?.value;
}