import { Children } from "react";
import TaskCheckMark from "../../TodoComponent/TaskComponents/TaskCheckMark";
export default function ModalMainContent({ description, children }) {
  return (
    <div className="flex items-start px-4">
      <TaskCheckMark className="mt-1 text-xl" />
      <div className="mt-1 ml-3 w-full">
        {children}
        <p className="my-3">{description}</p>
      </div>
    </div>
  );
}
