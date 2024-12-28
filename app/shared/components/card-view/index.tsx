import React, { useState } from "react";
import { ITask } from "../../_arquitecture/domain/interface";
import CardEdit from "./components/CardEdit";
import CardModal from "./components/CardModal";
import CardView from "./components/CardView";
interface IProps {
  task: ITask;
}
const Card = ({ task }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState<ITask>(task);
  const [showAlertDetele, setShowAlertDetele] = useState<boolean>(false);

  const handleDelete = () => {
    setNewData({ ...newData, status: "eliminada" });
    setShowAlertDetele(false);
  };
  return (
    <>
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
