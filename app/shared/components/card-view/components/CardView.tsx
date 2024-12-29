import React from "react";
import { ITask } from "../../../_arquitecture/domain/interface";
import { RiDeleteBin5Line } from "react-icons/ri";

interface IProps {
  task: ITask;
  // settask: React.Dispatch<React.SetStateAction<ITask>>;
  clickEdit: () => void;
  clickDelete: () => void;
}
const CardView = ({ task, clickEdit, clickDelete }: IProps) => {
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
    <div
      className="z-0 relative bg-blue-50 shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px] cursor-pointer"
      key={task.id}
    >
      <div
        className=" absolute w-full h-full top-0 left-0 "
        onClick={clickEdit}
      />
      <div className="relative">
        <h1 className="text-blue-900 border-b-4 font-semibold border-blue-900 mb-2">
          {task.title}
        </h1>
        {task.status !== "eliminada" && (
          <div
            className="z-20 absolute top-[-15px] right-[-5px]"
            onClick={clickDelete}
          >
            <RiDeleteBin5Line color="red" size={35} />
          </div>
        )}
      </div>
      <div
        className="flex flex-col justify-between"
        style={{ height: "calc(100% - 30px)" }}
      >
        <p className="text-blue-600">{task.description}</p>
        <p
          className={`text-white ${getColor(
            task.status
          )} text-center py-1 rounded-lg`}
        >
          {task.status.toLocaleUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default CardView;
