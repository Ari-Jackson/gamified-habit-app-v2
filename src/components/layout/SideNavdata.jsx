import {
  InboxIcon,
  MapIcon,
  SunIcon,
  CalendarDaysIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

export const sideNavData = [
  {
    title: "Dashboard",
    icon: () => <MapIcon className="w-6" />,
    link: "/",
    sectionEnd: false,
  },
  {
    title: "Today",
    icon: () => <SunIcon className="w-6" />,
    link: "/today",
    sectionEnd: true,
  },
  {
    title: "Incoming",
    icon: () => <InboxIcon className="w-6" />,
    link: "/incoming",
    sectionEnd: false,
  },
  {
    title: "Missions",
    icon: () => <CalendarDaysIcon className="w-6" />,
    link: "/missions",
    sectionEnd: true,
  },
  {
    title: "Training Center",
    icon: () => <TrophyIcon className="w-6" />,
    link: "/training-center",
    sectionEnd: true,
  },
];
