export default function PageWrapper({ open, children }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          open ? "sm:main-width" : "w-full"
        }
        ${
          open ? "pl-4" : "pl-14"
        } fixed right-0 bottom-0 shadow-sm pr-14 p-l -z-10`}
      >
        {children}
      </div>
    </>
  );
}
