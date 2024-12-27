import { redirect } from "next/navigation";
import LoginPageClient from "./presentation";
import { cookies } from "next/headers";

export default async function LoginPageSSR() {
  const session = (await cookies()).get("__session-seek")?.value ?? null;
  // solo valido que exista la cookie de session
  if(session && session.length > 0)
    redirect("/");
  
  return (
      <LoginPageClient />
  );
}
