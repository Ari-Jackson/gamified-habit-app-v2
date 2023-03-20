import { TfiClose } from "react-icons/tfi";
export default function ModalHeader({ project, handleClose }) {
  return (
    <header className="flex items-center gap-4 rounded-t-lg py-1  px-4 leading-10">
      <div className="flex-grow">
        <h3>{project}</h3>
      </div>
      <div className="flex hover:cursor-pointer" onClick={handleClose}>
        <TfiClose className="text-lg font-light" />
      </div>
    </header>
  );
}
