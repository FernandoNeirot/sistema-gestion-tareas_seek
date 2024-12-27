import React, { useState } from "react";
import { ITask } from "../../_arquitecture/domain/interface";
import CardEdit from "../card-edit";
interface IProps {
  task: ITask;
}
const CardView = ({ task }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState<ITask>(task);
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
    <>
      {isEdit ? (
        <CardEdit task={newData} setNewData={setNewData} setIsEdit={setIsEdit}/>
      ) : (
        <div
          className="bg-blue-50 shadow-md rounded-lg p-4 m-4 min-h-[250px] w-[300px]"
          key={newData.id}
          onClick={() => setIsEdit(!isEdit)}
        >
          <h1 className="text-blue-900 border-b-4 font-semibold border-blue-900 mb-2">
            {newData.title}
          </h1>
          <div
            className="flex flex-col justify-between"
            style={{ height: "calc(100% - 30px)" }}
          >
            <p className="text-blue-600">{newData.description}</p>
            <p
              className={`text-white ${getColor(
                newData.status
              )} text-center py-1 rounded-lg`}
            >
              {newData.status.toLocaleUpperCase()}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardView;
