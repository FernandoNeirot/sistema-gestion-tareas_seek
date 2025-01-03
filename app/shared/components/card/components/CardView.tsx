import React from "react";
import { ITask } from "../../../_arquitecture/domain/interface";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getColor } from "@/app/shared/_arquitecture/domain/functions";
import { FaRegEdit } from "react-icons/fa";
import { useTasks } from "@/app/(home)/domain/Context.Task";
interface IProps {
  task: ITask;
  // settask: React.Dispatch<React.SetStateAction<ITask>>;
  clickEdit: () => void;
  clickDelete: () => void;
}
const CardView = ({ task, clickEdit, clickDelete }: IProps) => {
  const value = useTasks();
  return (
    <div
      className="z-0 relative bg-blue-50 shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px] cursor-pointer"
      key={task.id}
    >
      <div
        className=" absolute w-full h-full top-0 left-0 "
        onClick={clickEdit}
      />
      <div className="relative flex justify-between border-b-4 border-blue-900">
        <h1 className="text-blue-900 w-full  font-semibold  mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {task.title}
        </h1>
        <div className="relative flex mt-1 w-[90px]">
          <div
            className={`z-20 absolute top-[-15px] right-[${
              value?.showDelete ? "-5px" : "40px"
            }]`}
            onClick={clickEdit}
          >
            <FaRegEdit color="green" size={35} />
          </div>
          {task.status !== "4 - eliminada" && (
            <div
              className="z-20 absolute top-[-15px] right-[-5px]"
              onClick={clickDelete}
            >
              <RiDeleteBin5Line color="red" size={35} />
            </div>
          )}
        </div>
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
