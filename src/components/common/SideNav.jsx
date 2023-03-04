import {
  InboxIcon,
  MapIcon,
  SunIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

export default function SideNav({ open }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          open ? "w-60" : "w-0"
        } bg-secondary fixed left-0 bottom-0 shadow-sm`}
      >
        <div className="flex flex-col w-full px-4 pt-9 space-y-4">
          <div className="duration-300 relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
            <MapIcon className="w-6" />
            <p className={`${!open && "opacity-0"}`}>Dashboard</p>
          </div>
          <div className="duration-300 relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
            <InboxIcon className="w-6" />
            <p className={`${!open && "opacity-0"}`}>Inbox</p>
          </div>
          <div className="duration-300 relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
            <SunIcon className="w-6" />
            <p className={`${!open && "opacity-0"}`}>Today</p>
          </div>
          <div className="duration-300  relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
            <CalendarDaysIcon className="w-6" />
            <p className={`${!open && "opacity-0"}`}>Upcoming</p>
          </div>
        </div>
      </div>
    </>
  );
}
