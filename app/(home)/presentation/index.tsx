"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { useEffect, useState } from "react";
import Card from "@/app/shared/components/card";
import { getTaskByUserId } from "../application/getTaskByUser";
import ButtonComponent from "@/app/shared/components/button";
import Modal from "@/app/shared/components/modal";
import CardAdd from "@/app/shared/components/card/components/CardAdd";
import Loading from "@/app/shared/components/loading";
import { TaskContext } from "../domain/Context.Task";

export default function HomePageClient() {
  const [data, setData] = useState<ITask[] | null>(null);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [dataFilter, setDataFilter] = useState<ITask[] | null>(null);
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const HandleReloadoData = () => {
    getTaskByUserId().then((res) => {
      setData(res);
      if (showDelete) {
        setDataFilter(
          res.filter((task: ITask) => task.status === "4 - eliminada")
        );
      } else {
        setDataFilter(
          res.filter((task: ITask) => task.status !== "4 - eliminada")
        );
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    getTaskByUserId().then((res) => {
      setData(res);
      setDataFilter(
        res.filter((task: ITask) => task.status !== "4 - eliminada")
      );
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (showDelete) {
      setDataFilter(
        data
          ? data.filter((task: ITask) => task.status === "4 - eliminada")
          : null
      );
    } else {
      setDataFilter(
        data
          ? data.filter((task: ITask) => task.status !== "4 - eliminada")
          : null
      );
    }
  }, [showDelete]);

  useEffect(() => {
    if (data && !data.some((task: ITask) => task.status === "4 - eliminada")) {
      setShowDelete(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className=" w-full h-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <TaskContext.Provider value={{ reloadoData: HandleReloadoData }}>
      <div className="flex flex-wrap gap-2 justify-center">
        {showAddTask && (
          <Modal title="Crear tarea" close={() => setShowAddTask(false)}>
            <CardAdd setShowAddTask={setShowAddTask} />
          </Modal>
        )}
        <div className="flex justify-center w-full mt-5">
          {!showDelete && (
            <ButtonComponent
              text="Crear tarea"
              onClick={() => setShowAddTask(true)}
            />
          )}
          {data?.some((task: ITask) => task.status === "4 - eliminada") && (
            <ButtonComponent
              text={`${showDelete ? "Ocultar" : "Ver"} Eliminadas`}
              background="bg-red-500"
              className="ml-2"
              onClick={() => setShowDelete(!showDelete)}
            />
          )}
        </div>
        {dataFilter
          ?.sort((a: ITask, b: ITask) => a.status.localeCompare(b.status))
          .map((task: ITask) => (
            <Card task={task} key={task.id} />
          ))}
      </div>
    </TaskContext.Provider>
  );
}
