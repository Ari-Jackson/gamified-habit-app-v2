import {
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Header({ setOpen, open }) {
  const handleCick = () => setOpen(!open);
  return (
    <header className="bg-primary fixed top-0 h-11 w-full flex justify-between px-5 box-border">
      <div className="flex items-center">
        <Bars3Icon className="top-nav-icon" onClick={handleCick} />
        <HomeIcon className="top-nav-icon" />
        <MagnifyingGlassIcon className="top-nav-icon" />
      </div>
      <div className=" flex items-center">
        <QuestionMarkCircleIcon className="top-nav-icon" />
        <UserCircleIcon className="top-nav-icon" />
      </div>
    </header>
  );
}
