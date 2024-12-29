'use client'
export const apiIsAuth = async () => {
  try {
    const response = await fetch("/api/auth").then((res) => res.json());
    return response;
  } catch (e) {
    console.log(e);
  }
}