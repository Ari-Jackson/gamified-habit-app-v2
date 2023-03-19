import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import TaskCheckMark from "../TaskComponents/TaskCheckMark";
import TaskModalHeader from "./TaskModalComponents/TaskModalHeader";

export default function TaskModal({ tasks }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { taskId: taskIdString } = useParams();

  const handleClose = () => {
    setIsOpen(false);
    navigate(`/incoming`);
  };

  if (tasks !== undefined && tasks.length > 0) {
    const chosenTask = tasks.find((task) => {
      return task.id === Number(taskIdString);
    });

    const { taskTitle, description, tags, difficulty, priority, project } =
      chosenTask;

    return (
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-40 p-8">
          <Dialog.Panel className="flex h-full w-full max-w-4xl flex-col rounded-lg bg-white">
            <TaskModalHeader project={project} handleClose={handleClose} />
            <hr />
            <article className="flex h-full flex-col gap-4 overflow-y-auto p-4">
              <div className="flex p-4">
                <TaskCheckMark />
                <div className="">
                  <Dialog.Title> {taskTitle}</Dialog.Title>
                  <p>{description}</p>
                </div>
              </div>
            </article>
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
