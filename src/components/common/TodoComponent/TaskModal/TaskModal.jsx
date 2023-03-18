import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import TaskCheckMark from "../TaskComponents/TaskCheckMark";

export default function TaskModal({ tasks }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { taskId: taskIdString } = useParams();

  const handleClose = () => {
    setIsOpen(false);
    navigate(`/incoming`);
  };

  if (tasks !== undefined) {
    console.log(tasks);
    const chosenTask = tasks.find((task) => {
      return task.id === Number(taskIdString);
    });

    const { taskTitle, description, tags, difficulty, priority, project } =
      chosenTask;

    return (
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-40 p-9">
          <Dialog.Panel className="h-full w-full max-w-4xl rounded-lg bg-white p-4">
            <Dialog.Title>{taskTitle}</Dialog.Title>
            <TaskCheckMark />
            <p>in {project}</p>
            <p>{description}</p>
          </Dialog.Panel>
        </div>
      </Dialog>
    );
  } else {
    return (
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-40 p-9">
          <Dialog.Panel className="h-full w-full max-w-4xl rounded-lg bg-white p-4"></Dialog.Panel>
        </div>
      </Dialog>
    );
  }
}
