import { sideNavData } from "./SideNavdata";
import { Link } from "react-router-dom";

export default function SideNav({ isSideNavOpen }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          !isSideNavOpen && "-translate-x-96"
        } fixed left-0 bottom-0 w-60 bg-secondary shadow-sm`}
      >
        <div
          className={`flex w-full flex-col space-y-4 px-4 pt-9 ${
            !isSideNavOpen && "translate-x-12 opacity-0"
          }`}
        >
          {sideNavData.map(({ title, icon, link, sectionEnd }) => {
            return (
              <Link to={link} key={title}>
                <div
                  className={`relative flex h-8 cursor-pointer items-center space-x-2 rounded-md pl-2 text-primary duration-300 hover:bg-primary hover:text-white ${
                    sectionEnd && "mb-5"
                  }`}
                >
                  {icon()}
                  <p>{title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
