import { HiChevronDoubleUp } from "react-icons/hi";
import { TbCoins } from "react-icons/tb";
import { taskData } from "../TaskData";

export default function TaskStats({ reward }) {
  const { xp, gold } = reward;
  return (
    <div className="mx-2 mt-2 flex flex-col items-end">
      <div className="flex">
        <p className="font-medium">{xp} XP</p>
        <HiChevronDoubleUp className="ml-1 h-7 w-7" />
      </div>
      <div className="flex">
        <p className="font-medium">{gold} G.</p>
        <TbCoins className="ml-1 h-7 w-7" />
      </div>
    </div>
  );
}
