"use client";

import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { useEffect, useState } from "react";
import { getTask } from "../application/getTask";

export default function HomePage() {
  const [data, setData] = useState<ITask[] | null>(null);
  useEffect(() => {
    const userData = localStorage.getItem("user-sistema-tareas");
    if(!userData)
      location.assign("/login");
    else
      getTask().then((res) => setData(res));
  }, []);
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data?.map((task) => (
        <div
          className="bg-white shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px]"
          key={task.id}
        >
          <h1 className="text-blue-900">{task.title}</h1>
          <p className="text-blue-500">{task.description}</p>
        </div>
      ))}
    </div>
  );
}
