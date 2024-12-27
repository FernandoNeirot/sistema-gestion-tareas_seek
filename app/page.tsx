import { Metadata } from "next";
import HomePage from "./(home)/presentation/page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Sistema gestion de tareas",
  description: "Reto de codificacion para SEEK",
};

export default async function Home() {
  const session = (await cookies()).get("__session-seek")?.value ?? null;
  if(!session)
    redirect("/login");
  return (
   <HomePage />
  );
}
