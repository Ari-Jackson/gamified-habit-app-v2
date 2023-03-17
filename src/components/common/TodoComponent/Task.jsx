import { useState } from "react";

import TaskDetails from "./TaskComponents/TaskDetails";
import TaskStats from "./TaskComponents/TaskStats";
import TaskPlay from "./TaskComponents/TaskPlay";

export default function Task({ taskData }) {
  const { reward, ...taskDetails } = taskData;

  return (
    <>
      {/* >
        <TaskPlay />
        <TaskStats reward={reward} /> 
        To turn the list back into a card remove border-b and replace with shadow of choice */}
      <li className="card card-compact	m-3 w-full rounded-none border-b bg-base-100">
        <div className="card-body">
          <TaskDetails taskDetails={taskDetails} />
        </div>
      </li>
    </>
  );
}
