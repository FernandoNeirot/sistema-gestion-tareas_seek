import React from "react";
import { ITask } from "../../_arquitecture/domain/interface";
import InputComponent from "../Input";
import ButtonComponent from "../button";
import TextareaComponent from "../textarea";
interface IProps {
  task: ITask;
  setNewData: React.Dispatch<React.SetStateAction<ITask>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardEdit = ({ task, setNewData, setIsEdit }: IProps) => {
  const getColor = (status: string) => {
    switch (status) {
      case "eliminada":
        return "bg-red-600";
      case "pendiente":
        return "bg-yellow-600";
      case "completada":
        return "bg-green-600";
      default:
        return "bg-blue-500";
    }
  };
  return (
    <div
      className="bg-blue-50 shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px]"
      key={task.id}
    >
      <h1 className="text-blue-900 border-b-4 font-semibold border-blue-900 mb-2">
        <InputComponent
          placeholder="Título"
          value={task.title}
          onChange={(e) => setNewData({ ...task, title: e.target.value })}
        />
      </h1>
      <div className="flex flex-col justify-between">
        <p className="text-blue-600">
          <TextareaComponent
            placeholder="Descripción"
            value={task.description}
            onChange={(e) =>
              setNewData({ ...task, description: e.target.value })
            }
          />
        </p>
        <p
          className={`text-white ${getColor(
            task.status
          )} text-center py-1 rounded-lg`}
        >
          {/* // TODO: llevar a un componente */}
          <select
            className=" text-blue-950"
            value={task.status}
            onChange={(e) =>
              setNewData({
                ...task,
                status: e.target.value as
                  | "pendiente"
                  | "completada"
                  | "eliminada",
              })
            }
          >
            <option className=" text-blue-950" value="pendiente">
              Pendiente
            </option>
            <option className=" text-blue-950" value="completada">
              Completada
            </option>
            <option className=" text-blue-950" value="eliminada">
              Eliminada
            </option>
          </select>
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <ButtonComponent
          isLoading={false}
          text="Guardar"
          onClick={() => setIsEdit(false)}
        />
      </div>
    </div>
  );
};

export default CardEdit;
