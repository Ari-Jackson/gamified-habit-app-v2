import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import ModalHeader from "./TaskModalComponents/ModalHeader";
import ModalMainContent from "./TaskModalComponents/ModalMainContent";
import ModalEditSection from "./TaskModalComponents/ModalEditSection";

export default function TaskModal({ tasks }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { taskId: taskIdString } = useParams();

  const handleClose = () => {
    setIsOpen(false);
    navigate(`/incoming`);
  };
  console.log(tasks);

  if (tasks !== undefined && tasks.length > 0) {
    const chosenTask = tasks.find((task) => {
      return task.id === Number(taskIdString);
    });
    const { taskTitle, description, project, notes } = chosenTask;

    return (
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 flex h-full items-center justify-center bg-slate-900 bg-opacity-40 pt-40 sm:p-8">
          <Dialog.Panel className="flex h-full w-full max-w-4xl flex-col overflow-y-auto rounded-t-lg bg-white sm:rounded-lg">
            <ModalHeader project={project} handleClose={handleClose} />
            <hr />
            <article className="flex h-full flex-col gap-4 overflow-y-auto p-4">
              <ModalMainContent description={description}>
                <Dialog.Title className="flex text-xl font-semibold">
                  {taskTitle}
                </Dialog.Title>
              </ModalMainContent>
              <ModalEditSection chosenTask={chosenTask} />
              <div className="px-4">
                <form>
                  <textarea
                    id="story"
                    name="story"
                    rows="10"
                    className="w-full px-4 py-2"
                    placeholder="Notes... "
                    value={notes}
                  ></textarea>
                </form>
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
