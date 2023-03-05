import {
  CircleStackIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function StatsSection({ statsOpen }) {
  return (
    <div className="flex flex-col px-4 flex-grow gap-9 justify-center">
      <div className={`w-80 ${!statsOpen && "hidden"}`}>
        <div className="flex">
          <h1 className="flex-grow">XP</h1>
          <h1>3000</h1>
        </div>
        <div className="bg-gray-400 h-5 rounded-xl z-0 absolute w-80"></div>
        <div className="bg-amber-300 h-5 rounded-xl z-10 absolute w-40"></div>
      </div>
      <div
        className={`${statsOpen ? "h-12" : "h-7"} flex justify-between w-80`}
      >
        <div className="flex">
          <CircleStackIcon className="text-yellow-500 w-12" />
          <div className="bg-gray-400 h-full w-12 rounded-full -mx-4 my-auto flex justify-center items-center">
            <span className="text-yellow-500">365</span>
          </div>
        </div>
        <div className="flex">
          <HeartIcon className="text-rose-600 w-12" />
          <div className="bg-gray-400 h-full w-12 rounded-full -mx-4 my-auto flex justify-center items-center">
            <span className="text-rose-600">12</span>
          </div>
        </div>
        <div className="flex">
          <SparklesIcon className="text-cyan-600 w-12" />
          <div className="bg-gray-400 h-full w-12 rounded-full -mx-4 my-auto flex justify-center items-center">
            <span className="text-cyan-600">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
