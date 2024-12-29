interface ILoginProps {
  user: string;
  pass: string;
}

export const apiLoginNew = async ({user, pass}:ILoginProps) => {
  const responde = await fetch("/api/auth", {
    body: JSON.stringify({ user, pass }),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  return responde;
}