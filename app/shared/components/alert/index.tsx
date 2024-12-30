import React from "react";
import Modal from "../modal";

interface IProps {
  title: string;
  description: string;
  close: () => void;
}

const AlertComponent = ({ title, description, close }: IProps) => {
  return (
    <Modal title={title} close={close}>
      <div className="text-center text-blue-500">
        <div>{description}</div>
      </div>
    </Modal>
  );
};

export default AlertComponent;
