export default function PageWrapper({ open, children }) {
  return (
    <>
      <div
        className={`side-nav-height duration-500 ${
          open ? "main-width" : "w-full"
        } fixed right-0 bottom-0 shadow-sm`}
      >
        {children}
      </div>
    </>
  );
}
