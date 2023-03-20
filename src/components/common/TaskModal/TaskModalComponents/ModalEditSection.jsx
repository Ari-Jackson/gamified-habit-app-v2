import { BsCalendarEvent } from "react-icons/bs";
import { HiInbox } from "react-icons/hi";
import { TbSwords, TbFlag } from "react-icons/tb";
import { AiOutlineTag } from "react-icons/ai";

export default function ModalEditSection({
  chosenTask,
  chosenTask: { project, due, priority, difficulty, tags },
}) {
  console.log(chosenTask);
  const editsectionData = [
    {
      title: "project",
      info: project,
      icon: (className) => <HiInbox className={className} />,
    },
    {
      title: "due",
      info: due.relative,
      icon: (className) => <BsCalendarEvent className={className} />,
    },
    {
      title: "priority",
      info: priority,
      icon: (className) => <TbFlag className={className} />,
    },
    {
      title: "difficulty",
      info: difficulty,
      icon: (className) => <TbSwords className={className} />,
    },
    {
      title: "tags",
      info: tags.join(", "),
      icon: (className) => <AiOutlineTag className={className} />,
    },
  ];
  return (
    <div className="flex flex-col gap-x-4 px-6 ">
      {editsectionData.map((item) => {
        return (
          <>
            <div className="flex h-10 items-center gap-3 rounded-md pl-1 duration-200 hover:bg-slate-400 hover:bg-opacity-30">
              {item.icon("text-xl")}
              <h3 className="w-full">{item.info}</h3>
            </div>
            <hr className="ml-8" />
          </>
        );
      })}
    </div>
  );
}
