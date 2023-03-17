import Task from "../../components/common/TodoComponent/Task";
import taskData from "../../../database/db.json";

export default function Today() {
  const todaysData = taskData.tasks.filter(
    (task) => task.due.relative == "Today"
  );
  return (
    <>
      <header>
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-primary">Today</h1>
        </div>
      </header>
      <div className="grid grid-cols-2">
        <div className=" h-full w-11/12 border"></div>
        <ul>
          {todaysData.map((task) => {
            return <Task key={task.id} taskData={task} />;
          })}
        </ul>
      </div>
    </>
  );
}
