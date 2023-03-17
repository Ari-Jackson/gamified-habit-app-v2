import {
  CircleStackIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function StatsSection({ statsOpen }) {
  const respondToState = () => !statsOpen && "-translate-y-6";
  const setVisibility = () => !statsOpen && "hidden";
  const setFormat = () =>
    !statsOpen && "flex flex-row-reverse items-center pb-1";
  return (
    <div
      className={
        "flex flex-grow flex-col gap-4 px-4 duration-200 ease-in " +
        respondToState()
      }
    >
      <div className={`w-80 duration-200 ${setVisibility()}`}>
        <div className="flex">
          <h1 className="flex-grow">XP</h1>
          <h1>3000</h1>
        </div>
        <progress
          className="progress progress-warning h-4 w-80"
          value="10"
          max="100"
        ></progress>
      </div>
      <div className="w-fit duration-200 ease-in">
        <div class="stats h-full w-full overflow-visible shadow">
          <div class={`stat duration-200 ease-in ${setFormat()}`}>
            <div class="stat-figure text-secondary">
              <CircleStackIcon className="w-8 text-yellow-500" />
            </div>
            <div class={`stat-title duration-200 ${setVisibility()}`}>Gold</div>
            <div class="stat-value text-lg">840</div>
          </div>
          <div class={`stat duration-200 ${setFormat()}`}>
            <div class="stat-figure text-secondary">
              <HeartIcon className="w-8 text-rose-600" />
            </div>
            <div class={`stat-title duration-200 ${setVisibility()}`}>
              Heart
            </div>
            <div class="stat-value text-lg">12</div>
          </div>
          <div class={`stat duration-200 ${setFormat()}`}>
            <div class="stat-figure text-secondary">
              <SparklesIcon className="w-8 text-cyan-600" />
            </div>
            <div class={`stat-title duration-200 ${setVisibility()}`}>Mana</div>
            <div class="stat-value text-lg">50</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function newFunc() {
//   return (
//     <>
//       <div className="flex">
//         <CircleStackIcon className="w-12 text-yellow-500" />
//         <div className="-mx-4 my-auto flex h-full w-12 items-center justify-center rounded-full bg-primary">
//           <span className="text-white">365</span>
//         </div>
//       </div>
//       <div className="flex">
//         <HeartIcon className="w-12 text-rose-600" />
//         <div className="-mx-4 my-auto flex h-full w-12 items-center justify-center rounded-full bg-primary">
//           <span className="text-white">12</span>
//         </div>
//       </div>
//       <div className="flex">
//         <SparklesIcon className="w-12 text-cyan-600" />
//         <div className="-mx-4 my-auto flex h-full w-12 items-center justify-center rounded-full bg-primary">
//           <span className="text-white">4</span>
//         </div>
//       </div>
//     </>
//   );
// }
