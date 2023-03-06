import TodoComponent from "../../components/common/TodoComponent";

export default function Today() {
  return (
    <>
      <header>
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-primary">Today</h1>
        </div>
      </header>
      <div className="grid grid-cols-2 bg-red-200">
        <div className="h-12 w-12"></div>
        <ul>
          <TodoComponent />
          <TodoComponent />
          <TodoComponent />
        </ul>
      </div>
    </>
  );
}
