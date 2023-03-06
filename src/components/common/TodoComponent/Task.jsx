import { useState } from "react";
import { taskData } from "./TaskData";
import TaskCheckMark from "./TaskComponents/TaskCheckMark";
import TaskDetails from "./TaskComponents/TaskDetails";
import TaskStats from "./TaskComponents/TaskStats";
import TaskPlay from "./TaskComponents/TaskPlay";

export default function Task() {
  const [isComplete, setComplete] = useState(false);

  const { reward, ...taskDetails } = taskData;

  return (
    <li className="my-4 flex w-full items-start border-b pb-1">
      <TaskCheckMark isComplete={isComplete} setComplete={setComplete} />
      {/* DETAILS SECTION */}
      <TaskDetails taskDetails={taskDetails} />
      {/* TIME BOX SECTION */}
      <TaskPlay />
      {/* STATS SECTION */}
      <TaskStats reward={reward} />
    </li>
  );
}
