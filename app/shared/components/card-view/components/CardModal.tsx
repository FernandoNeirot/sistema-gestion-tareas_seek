import React from "react";
import Modal from "../../modal";
import ButtonComponent from "../../button";

interface IProps {
  close: () => void;
  title: string;
  label: string;
  btnActionclick: () => void;
  btnActionText: string;
  btnActionBackground?: string;
}

const CardModal = ({close, title, label, btnActionText, btnActionclick, btnActionBackground}:IProps) => {
  return (
    <Modal title={title} close={close}>
      <div className="z-50">
        <p className=" text-blue-500">{label}</p>
        <div className="flex justify-evenly mt-5">
          <ButtonComponent
            text="Cancelar"
            background="bg-gray-400"
            onClick={close}
          />
          <ButtonComponent
            text={btnActionText}
            background={btnActionBackground}
            onClick={btnActionclick}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
