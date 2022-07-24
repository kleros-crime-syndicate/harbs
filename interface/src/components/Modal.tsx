import React from "react";
import Popup from "reactjs-popup";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  open: boolean;
  unOpen: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, unOpen, children }) => (
  <Popup modal open={open} onClose={unOpen} closeOnEscape={false}>
    {(close) => (
      <>
        <div
          className="fixed
                     top-0 left-0 h-screen z-10 w-full
                     bg-slate-800/50 backdrop-blur-md"
          onClick={close}
        />
        <div
          className="fixed
                     top-1/4 left-1/4 w-1/2 max-h-1/2 z-30"
        >
          {children}
        </div>
      </>
    )}
  </Popup>
);

export default Modal;
