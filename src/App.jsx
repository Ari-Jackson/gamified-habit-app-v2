import Header from "./components/common/Header";
import SideNav from "./components/common/SideNav";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header setOpen={setOpen} open={open} />
      <SideNav open={open} />
    </>
  );
}

export default App;
