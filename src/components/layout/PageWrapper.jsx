export default function PageWrapper({ open, children }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          open ? "sm:main-width" : "w-full"
        }
        ${
          open ? "pl-4" : "pl-14"
        } p-l fixed right-0 bottom-0 -z-10 pr-14 shadow-sm`}
      >
        {children}
      </div>
    </>
  );
}
