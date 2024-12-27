"use client";

import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { useEffect, useState } from "react";
import { getTask } from "../application/getTask";
import Card from "@/app/shared/components/card-view";

export default function HomePageClient() {
  const [data, setData] = useState<ITask[] | null>(null);
  useEffect(() => {    
      getTask().then((res) => setData(res));
  }, []);
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data?.map((task) => (
        <Card task={task} key={task.id} />
      ))}
    </div>
  );
}
