import { Metadata } from "next";
import HomePage from "./(home)/presentation/page";

export const metadata: Metadata = {
  title: "Sistema gestion de tareas",
  description: "Reto de codificacion para SEEK",
};

export default function Home() {
  
  return (
   <HomePage />
  );
}
