import { redirect } from "next/navigation";
import ClientPage from "./presentation/ClientPage";
import { cookies } from "next/headers";

export default async function LoginPage() {
  const session = (await cookies()).get("__session-seek")?.value ?? null;
  console.log(session)
  if(session && session.length > 0)
    redirect("/");

  return (
      <ClientPage />
  );
}
