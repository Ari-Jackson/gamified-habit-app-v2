import { FaRegCircle, FaCircle } from "react-icons/fa";
import "animate.css";

export default function TaskCheckMark({ isComplete, setComplete }) {
  const handleClick = () => setComplete(true);
  return (
    <div className="flex items-center">
      {isComplete ? (
        <FaCircle className="animate__animated animate__heartBeat m-1 text-green-600" />
      ) : (
        <FaRegCircle className="m-1" onClick={handleClick} />
      )}
    </div>
  );
}
