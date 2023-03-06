import TodoComponent from "../../components/common/TodoComponent";

export default function Today() {
  return (
    <>
      <header>
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-primary">Today</h1>
        </div>
      </header>
      <div className="mt-5">
        <TodoComponent />
      </div>
    </>
  );
}
