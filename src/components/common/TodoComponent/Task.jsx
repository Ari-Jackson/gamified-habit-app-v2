import TaskDetails from "./TaskComponents/TaskDetails";
// import TaskStats from "./TaskComponents/TaskStats";
// import TaskPlay from "./TaskComponents/TaskPlay";
import { Link } from "react-router-dom";

export default function Task({ taskData }) {
  const { reward, ...taskDetails } = taskData;

  return (
    <>
      {/* >
        <TaskPlay />
        <TaskStats reward={reward} /> 
        To turn the list back into a card remove border-b and replace with shadow of choice */}
      <li className="card-compact card w-full rounded-none border-b bg-base-100">
        <Link to={`/incoming/${taskDetails.id}`}>
          <div className="card-body">
            <TaskDetails taskDetails={taskDetails} />
          </div>
        </Link>
      </li>
    </>
  );
}
