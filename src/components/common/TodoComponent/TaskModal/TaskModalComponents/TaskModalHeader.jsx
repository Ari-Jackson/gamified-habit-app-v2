import { TfiClose } from "react-icons/tfi";
export default function TaskModalHeader({ project, handleClose }) {
  return (
    <header className="py-1leading-10 flex items-center gap-4  rounded-t-lg px-4">
      <div className="flex-grow">
        <h3>{project}</h3>
      </div>
      <div className="flex hover:cursor-pointer" onClick={handleClose}>
        <TfiClose className="text-lg font-light" />
      </div>
    </header>
  );
}
