import { sideNavData } from "./SideNavdata";
import { Link } from "react-router-dom";

export default function SideNav({ open }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          !open && "-translate-x-96"
        } bg-secondary fixed left-0 bottom-0 shadow-sm w-60`}
      >
        <div
          className={`flex flex-col w-full px-4 pt-9 space-y-4 ${
            !open && "opacity-0 translate-x-12"
          }`}
        >
          {sideNavData.map(({ title, icon, link, sectionEnd }) => {
            return (
              <Link to={link} key={title}>
                <div
                  className={`text-primary duration-300 relative h-8 flex items-center space-x-2 cursor-pointer rounded-md hover:bg-primary hover:text-white pl-2 ${
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
