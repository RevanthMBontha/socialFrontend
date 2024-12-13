import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const Modal = ({ isOpen, onClose, title = "", children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="absolute right-0 top-0 z-20 flex h-screen w-screen items-center justify-center overflow-y-auto text-black">
      {/* Div to blur the background */}
      <div className="absolute right-0 top-0 z-30 h-screen w-screen bg-neutral-700 opacity-70 backdrop-blur-md" />

      {/* The div containing data */}
      <div className="relative z-40 h-fit max-h-full w-11/12 overflow-y-auto rounded-xl bg-white p-4 pt-12">
        <div className="absolute right-2 top-2 flex w-[94%] items-center justify-between">
          <h1 className="text-2xl">{title}</h1>
          <Button
            onClick={onClose}
            className="cursor-pointer rounded-full border border-solid border-black p-1 hover:bg-red-400"
          >
            <IoClose className="" size={18} />
          </Button>
        </div>
        <div className="mt-4 h-fit max-h-[600px] w-full overflow-y-auto rounded-xl">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("root-modal"),
  );
};

export default Modal;
