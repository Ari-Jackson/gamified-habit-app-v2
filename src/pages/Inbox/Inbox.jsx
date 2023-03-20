import Task from "../../components/common/Task/Task";
import { Outlet } from "react-router-dom";
export default function Inbox({ tasks }) {
  const inboxTasksWithJSX = tasks
    .filter(({ project }) => project == "Inbox")
    .map((taskData) => <Task key={taskData.id} taskData={taskData} />);

  return (
    <>
      <header>
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-primary">Incoming</h1>
        </div>
      </header>
      <ul>{inboxTasksWithJSX}</ul>
      <Outlet />
    </>
  );
}
