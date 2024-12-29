import React, { useState } from "react";

import InputComponent from "../../Input";
import ButtonComponent from "../../button";
import TextareaComponent from "../../textarea";
import SelectComponent from "../../select";
import { ITask } from "@/app/shared/_arquitecture/domain/interface";
import { postTask } from "@/app/(home)/application/postTask";
import { useTasks } from "@/app/(home)/presentation";
interface IProps {
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardAdd = ({ setShowAddTask }: IProps) => {
  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
    status: "por hacer",
    userId: 1,
  });

  const value = useTasks();

  const handleAddTask = async() => {
    const response = await postTask({ task })
    if(response){
      setShowAddTask(false);
      value?.reloadoData();
    }
  };

  const getColor = (status: string) => {
    switch (status) {
      case "eliminada":
        return "bg-red-600";
      case "por hacer":
        return "bg-yellow-600";
      case "completada":
        return "bg-green-600";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px]">
      <div className="text-blue-900 border-b-4 font-semibold border-blue-900 mb-2">
        <InputComponent
          placeholder="Título"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-blue-600">
          <TextareaComponent
            placeholder="Descripción"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <div
          className={`text-white ${getColor(
            task.status
          )} text-center py-1 rounded-lg`}
        >
          <SelectComponent
            value={task.status}
            onChange={(e) =>
              setTask({
                ...task,
                status: e.target.value as
                  | "eliminada"
                  | "por hacer"
                  | "en progreso"
                  | "completada",
              })
            }
            options={
              task.status === "eliminada"
                ? ["por hacer", "en progreso", "completada", "eliminada"]
                : ["por hacer", "en progreso", "completada"]
            }
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <ButtonComponent
          isLoading={false}
          text="Guardar"
          onClick={handleAddTask}
        />
      </div>
    </div>
  );
};

export default CardAdd;
