import Task from "../../components/common/Task/Task";

export default function Today({ tasks }) {
  const todaysDataWithJSX = tasks
    .filter((task) => task.due.relative == "Today")
    .map((task) => {
      return <Task key={task.id} taskData={task} />;
    });

  return (
    <>
      <header>
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-primary">Today</h1>
        </div>
      </header>
      <div className="grid grid-cols-2">
        <div className=" h-full w-11/12 border"></div>
        <ul>{todaysDataWithJSX}</ul>
      </div>
    </>
  );
}
