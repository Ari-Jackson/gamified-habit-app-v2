import { useState } from "react";
import { FaRegCircle, FaCircle } from "react-icons/fa";
import "animate.css";

export default function TodoComponent() {
  const [isComplete, setComplete] = useState(false);

  return (
    <div className="flex items-start border-b-2">
      <div className="flex items-center">
        {isComplete ? (
          <FaCircle className="m-1 animate__animated animate__heartBeat text-green-600" />
        ) : (
          <FaRegCircle className="m-1" onClick={() => setComplete(true)} />
        )}
      </div>
      <div className="flex flex-col pl-1">
        <h1>Do the dishes dummy</h1>
        <p className="whitespace-nowrap overflow-hidden px-6">
          Do BEFORE 6PM/Tori comes home
        </p>
      </div>
    </div>
  );
}
