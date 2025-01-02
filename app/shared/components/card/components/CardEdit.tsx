import React, { useState } from "react";
import { IError, ITask } from "../../../_arquitecture/domain/interface";
import InputComponent from "../../Input";
import ButtonComponent from "../../button";
import TextareaComponent from "../../textarea";
import SelectComponent from "../../select";
import { patchTask } from "@/app/(home)/application/patchTask";
import Loading from "../../loading";
import { getColor } from "@/app/shared/_arquitecture/domain/functions";
import AlertComponent from "../../alert";
import { useTasks } from "@/app/(home)/domain/Context.Task";


interface IProps {
  task: ITask;
  setNewData: React.Dispatch<React.SetStateAction<ITask>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardEdit = ({ task, setNewData, setIsEdit }: IProps) => {
  const [taskEdit, setTaskEdit] = useState<ITask>(task);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const value = useTasks();

  const handleEditTask = async () => {
    if (taskEdit.title === "" || taskEdit.description === "") {
      setError({
        error: true,
        description: "Los campos Titulo y descripcon NO pueden estar vacios",
      });
    } else {
      setIsLoading(true);
      const response = await patchTask({ task: taskEdit }).finally(() =>
        setIsLoading(false)
      );
      if (response) {
        setIsEdit(false);
        value?.reloadoData();
        setNewData(taskEdit);
      }
    }
  };

  return (
    <div
      className="relative bg-blue-50 shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px]"
      key={taskEdit.id}
    >
      {error && error.error && (
        <AlertComponent
          title="Error"
          description={error.description}
          close={() => setError(null)}
        />
      )}
      {isLoading && (
        <div className="absolute top-0 right-0 w-full h-full bg-white bg-opacity-10 z-10">
          <Loading />
        </div>
      )}
      <div className="text-blue-900 border-b-4 font-semibold border-blue-900 mb-2">
        <InputComponent
          placeholder="Título"
          value={taskEdit.title}
          onChange={(e) => setTaskEdit({ ...taskEdit, title: e.target.value })}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-blue-600">
          <TextareaComponent
            placeholder="Descripción"
            value={taskEdit.description}
            onChange={(e) =>
              setTaskEdit({ ...taskEdit, description: e.target.value })
            }
          />
        </div>
        <div
          className={`text-white ${getColor(
            taskEdit.status
          )} text-center py-1 rounded-lg`}
        >
          <SelectComponent
            value={taskEdit.status}
            onChange={(e) =>
              setTaskEdit({
                ...taskEdit,
                status: e.target.value as
                  | "1 - por hacer"
                  | "2 - en progreso"
                  | "3 - completada"
                  | "4 - eliminada",
              })
            }
            options={
              taskEdit.status === "4 - eliminada"
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
          text="Cancelar"
          background="bg-gray-500"
          onClick={() => setIsEdit(false)}
          className="mr-5"
        />
        <ButtonComponent
          isLoading={false}
          text="Guardar"
          onClick={handleEditTask}
        />
      </div>
    </div>
  );
};

export default CardEdit;
