export default function PageWrapper({ isSideNavOpen, children }) {
  return (
    <>
      <main
        className={`side-nav-height duration-500 ${
          isSideNavOpen
            ? "sm:main-width w-full sm:pl-4 sm:pr-14"
            : "w-full md:px-14"
        } fixed right-0 bottom-0 -z-10 overflow-y-scroll  px-4  pb-10 shadow-sm`}
      >
        {children}
      </main>
    </>
  );
}
