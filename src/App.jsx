import Header from "./components/common/Header";
import SideNav from "./components/common/SideNav";
import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Inbox from "./pages/Inbox/Inbox";
import Today from "./pages/Today/Today";
import Upcoming from "./pages/Upcoming/Upcoming";
import PageWrapper from "./components/common/PageWrapper";
import Statsbar from "./components/common/StatsBar/Statsbar";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Header setOpen={setOpen} open={open} />
        <SideNav open={open} />
        <main>
          <PageWrapper open={open}>
            <Statsbar open={open} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/today" element={<Today />} />
              <Route path="/upcoming" element={<Upcoming />} />
            </Routes>
          </PageWrapper>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
