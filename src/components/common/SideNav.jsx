import {
  InboxIcon,
  MapIcon,
  SunIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function SideNav({ open }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          open ? "w-60" : "w-0"
        } bg-secondary fixed left-0 bottom-0 shadow-sm`}
      >
        <div
          className={`flex flex-col w-full px-4 pt-9 space-y-4 ${
            !open && "opacity-0 translate-x-12"
          }`}
        >
          <Link to="/">
            <div className="text-primary duration-300 relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
              <MapIcon className="w-6" />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/today">
            <div className="text-primary duration-300 relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
              <SunIcon className="w-6" />
              <p>Today</p>
            </div>
          </Link>
          <Link to="/inbox">
            <div className="text-primary duration-300 relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
              <InboxIcon className="w-6" />
              <p>Inbox</p>
            </div>
          </Link>
          <Link to="/upcoming">
            <div className="text-primary duration-300  relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2">
              <CalendarDaysIcon className="w-6" />
              <p>Upcoming</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
