import {
  CircleStackIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function StatsSection({ statsOpen }) {
  return (
    <div className="flex flex-grow flex-col justify-center gap-9 px-4">
      <div className={`w-80 ${!statsOpen && "hidden"}`}>
        <div className="flex">
          <h1 className="flex-grow">XP</h1>
          <h1>3000</h1>
        </div>
        <div className="absolute  z-0 h-5 w-80 rounded-xl bg-primary"></div>
        <div className="absolute z-10 h-5 w-40 rounded-xl bg-amber-300"></div>
      </div>
      <div
        className={`${statsOpen ? "h-12" : "h-7"} flex w-80 justify-between`}
      >
        <div className="flex">
          <CircleStackIcon className="w-12 text-yellow-500" />
          <div className="-mx-4 my-auto flex h-full w-12 items-center justify-center rounded-full bg-primary">
            <span className="text-white">365</span>
          </div>
        </div>
        <div className="flex">
          <HeartIcon className="w-12 text-rose-600" />
          <div className="-mx-4 my-auto flex h-full w-12 items-center justify-center rounded-full bg-primary">
            <span className="text-white">12</span>
          </div>
        </div>
        <div className="flex">
          <SparklesIcon className="w-12 text-cyan-600" />
          <div className="-mx-4 my-auto flex h-full w-12 items-center justify-center rounded-full bg-primary">
            <span className="text-white">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
