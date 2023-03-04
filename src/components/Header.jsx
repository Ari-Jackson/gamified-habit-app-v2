import {
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="bg-primary h-11 w-full flex justify-between px-5 box-border">
      <div className="flex items-center">
        <Bars3Icon className="nav-icon" />
        <HomeIcon className="nav-icon" />
        <MagnifyingGlassIcon className="nav-icon" />
      </div>
      <div className=" flex items-center">
        <QuestionMarkCircleIcon className="nav-icon" />
        <UserCircleIcon className="nav-icon" />
      </div>
    </header>
  );
}
