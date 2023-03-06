import { TbFlag, TbSwords } from "react-icons/tb";
import { AiOutlineTag } from "react-icons/ai";
import { MdAlarm } from "react-icons/md";

export default function TaskDetails({ taskDetails }) {
  const {
    title,
    description,
    due: { relative, date },
    tags,
    reminders,
    priority,
    difficulty,
  } = taskDetails;

  return (
    <div className="flex flex-grow flex-col pl-1">
      <h1>{title}</h1>
      <p className="overflow-hidden whitespace-nowrap px-2 text-xs">
        {description}
      </p>
      <div className="mt-1 flex space-x-2 text-xs">
        <p>
          {relative} · {date}
        </p>
        <div className="flex justify-end space-x-2">
          {tags.length > 0 && <AiOutlineTag className="h-4 w-3" />}
          {reminders.length > 0 && <MdAlarm className="h-4 w-3" />}
          {priority > 0 && <TbFlag className="h-4 w-3" />}
          {difficulty > 0 && <TbSwords className="h-4 w-3" />}
        </div>
      </div>
    </div>
  );
}
