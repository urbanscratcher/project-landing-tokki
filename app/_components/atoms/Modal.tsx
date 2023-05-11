"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose as IconClose } from "react-icons/io";
import "./modal.scss";

interface ModalProps {
  children: any;
  isOpen?: boolean;
  onClose: () => void;
  disabled?: boolean;
  onClickOutside?: () => void;
}

const Modal = ({ children, isOpen, onClose, onClickOutside }: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    setShowModal(false);
    onClose();
  }, [onClose]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal--back" onClick={onClickOutside}>
      <div className="modal--position" onClick={(e) => e.stopPropagation()}>
        <div className="modal--container">
          {children}
          <IconClose onClick={closeHandler} className="close" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
