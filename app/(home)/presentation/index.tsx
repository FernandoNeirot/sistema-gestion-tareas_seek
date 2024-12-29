"use client";

import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { useEffect, useState } from "react";
import Card from "@/app/shared/components/card-view";
import { getTaskByUserId } from "../application/getTaskByUser";
import ButtonComponent from "@/app/shared/components/button";
import Modal from "@/app/shared/components/modal";
import CardAdd from "@/app/shared/components/card-view/components/CardAdd";

export default function HomePageClient() {
  const [data, setData] = useState<ITask[] | null>(null);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [dataFilter, setDataFilter] = useState<ITask[] | null>(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTaskByUserId().then((res) => {
      setData(res);
      setDataFilter(res.filter((task: ITask) => task.status !== "eliminada"));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (showDelete) {
      setDataFilter(
        data ? data.filter((task: ITask) => task.status === "eliminada") : null
      );
    } else {
      setDataFilter(
        data ? data.filter((task: ITask) => task.status !== "eliminada") : null
      );
    }
  }, [showDelete]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {showAddTask && (
        <Modal title="Crear tarea" close={() => setShowAddTask(false)}>
          <CardAdd setShowAddTask={setShowAddTask} />
        </Modal>
      )}
      <div className="flex justify-center w-full mt-5">
        <ButtonComponent
          text="Crear tarea"
          onClick={() => setShowAddTask(true)}
        />
        <ButtonComponent
          text={`${showDelete ? "Ocultar" : "Ver"} Eliminadas`}
          background="bg-red-500"
          className="ml-2"
          onClick={() => setShowDelete(!showDelete)}
        />
      </div>
      {dataFilter?.map((task) => (
        <Card task={task} key={task.id} />
      ))}
    </div>
  );
}
