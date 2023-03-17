import Task from "../../components/common/TodoComponent/Task";
import taskData from "../../../database/db.json";
export default function Inbox() {
  return (
    <>
      <header>
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-primary">Incoming</h1>
        </div>
      </header>
      <ul>
        {taskData.tasks.map((task) => {
          return <Task key={task.id} taskData={task} />;
        })}
      </ul>
    </>
  );
}
