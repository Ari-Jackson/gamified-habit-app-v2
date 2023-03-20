import { FaRegCircle, FaCircle } from "react-icons/fa";
import { useState } from "react";
import "animate.css";

export default function TaskCheckMark({ className }) {
  const [isComplete, setComplete] = useState(false);
  const handleClick = () => setComplete(!isComplete);
  return (
    <div className={"flex items-center " + className}>
      {isComplete ? (
        <FaCircle
          className="animate__animated animate__heartBeat m-1 text-green-500"
          onClick={handleClick}
        />
      ) : (
        <FaRegCircle className="m-1" onClick={handleClick} />
      )}
    </div>
  );
}
