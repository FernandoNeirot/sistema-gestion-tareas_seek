import React, { useState } from "react";

import InputComponent from "../../Input";
import ButtonComponent from "../../button";
import TextareaComponent from "../../textarea";
import SelectComponent from "../../select";
import { IError, ITask } from "@/app/shared/_arquitecture/domain/interface";
import { postTask } from "@/app/(home)/application/postTask";
import { getColor } from "@/app/shared/_arquitecture/domain/functions";
import AlertComponent from "../../alert";
import { useTasks } from "@/app/(home)/domain/Context.Task";
interface IProps {
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardAdd = ({ setShowAddTask }: IProps) => {
  const [error, setError] = useState<IError | null>(null);
  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
    status: "1 - por hacer",
    userId: 1,
  });

  const value = useTasks();

  const handleAddTask = async () => {
    if (task.title === "" || task.description === "") {
      setError({
        error: true,
        description: "Los campos Titulo y descripcon NO pueden estar vacios",
      });
    } else {
      const response = await postTask({ task });
      if (response) {
        setShowAddTask(false);
        value?.reloadoData();
      }
    }
  };

  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px]">
      {error && error.error && (
        <AlertComponent
          title="Error"
          description={error.description}
          close={() => setError(null)}
        />
      )}
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
                  | "1 - por hacer"
                  | "2 - en progreso"
                  | "3 - completada"
                  | "4 - eliminada",
              })
            }
            options={
              task.status === "4 - eliminada"
                ? [
                    "1 - por hacer",
                    "2 - en progreso",
                    "3 - completada",
                    "4 - eliminada",
                  ]
                : ["1 - por hacer", "2 - en progreso", "3 - completada"]
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
