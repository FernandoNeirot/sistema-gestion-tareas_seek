import React, { useState } from "react";
import { ITask } from "../../_arquitecture/domain/interface";
import CardEdit from "./components/CardEdit";
import CardModal from "./components/CardModal";
import CardView from "./components/CardView";
import Loading from "../loading";
import { deleteTask } from "@/app/(home)/application/deleteTask";
import { useTasks } from "@/app/(home)/presentation";
interface IProps {
  task: ITask;
}
const Card = ({ task }: IProps) => {
  const value = useTasks();
  
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState<ITask>(task);
  const [showAlertDetele, setShowAlertDetele] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {    
    setIsLoading(true);
    
    const response = await deleteTask({
      task: newData,
    }).finally(() => setIsLoading(false));
    if (response) {
      value?.reloadoData();
    }
    setNewData({ ...newData, status: "eliminada" });
    setShowAlertDetele(false);
  };

  return (
    <>
    {isLoading && (
        <div className="absolute top-0 right-0 w-full h-full bg-white bg-opacity-10 z-10">
          <Loading />
        </div>
      )}
      {showAlertDetele && (
        <CardModal
          close={() => setShowAlertDetele(false)}
          title="Eliminar tarea"
          label="¿Estás seguro de eliminar la tarea?"
          btnActionclick={handleDelete}
          btnActionText="Eliminar"
          btnActionBackground="bg-red-500"
        />
      )}
      {isEdit ? (
        <CardEdit
          task={newData}
          setNewData={setNewData}
          setIsEdit={setIsEdit}
        />
      ) : (
        <CardView
          task={newData}
          clickEdit={() => setIsEdit(true)}
          clickDelete={() => setShowAlertDetele(true)}
        />
      )}
    </>
  );
};

export default Card;
