import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import profile from "../../assets/images/myProfile.jpg";

export default function Header({ setIsSideNavOpen, isSideNavOpen }) {
  const handleCick = () => setIsSideNavOpen(!isSideNavOpen);
  return (
    <>
      <div className=" navbar min-h-6 fixed z-10 h-11 bg-primary text-primary-content">
        <div className="navbar-start">
          <div onClick={handleCick} className="btn-ghost btn-circle btn">
            <HiOutlineMenuAlt1 className="h-5 w-5" />
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn-ghost btn text-xl normal-case">
            hAdventure
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn-ghost btn-circle btn">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge-primary badge badge-xs indicator-item"></span>
            </div>
          </button>
          <div className="flex-none">
            <div className="dropdown-end dropdown">
              <label tabindex="0" class="btn-ghost btn-circle avatar btn">
                <div class="w-10 rounded-full">
                  <img src={profile} />
                </div>
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-primary shadow"
              >
                <li>
                  <a class="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
