import {
  InboxIcon,
  MapIcon,
  SunIcon,
  CalendarDaysIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

export const sideNavData = [
  {
    title: "Today",
    icon: () => <SunIcon className="w-6" />,
    link: "/",
    sectionEnd: true,
  },
  {
    title: "Incoming",
    icon: () => <InboxIcon className="w-6" />,
    link: "/incoming",
    sectionEnd: false,
  },
];
