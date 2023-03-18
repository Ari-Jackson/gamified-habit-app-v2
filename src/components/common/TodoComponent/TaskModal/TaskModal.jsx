import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskModal() {
  let [isOpen, setIsOpen] = useState(true);
  let navigate = useNavigate();
  let { page } = useParams();

  const handleClose = () => {
    setIsOpen(false);
    navigate(`/incoming`);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-40 p-9">
        <Dialog.Panel className="h-full w-full max-w-4xl rounded-lg bg-white p-4"></Dialog.Panel>
      </div>
    </Dialog>
  );
}
