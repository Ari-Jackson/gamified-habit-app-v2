export default function PageWrapper({ isSideNavOpen, children }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          isSideNavOpen ? "sm:main-width" : "w-full"
        }
        ${
          isSideNavOpen ? "pl-4" : "pl-14"
        } p-l fixed right-0 bottom-0 -z-10 pr-14 shadow-sm`}
      >
        {children}
      </div>
    </>
  );
}
