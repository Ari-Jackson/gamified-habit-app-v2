import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// --------- Pages & Components ---------
import Header from "./components/layout/Header";
import SideNav from "./components/layout/SideNav/SideNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import Inbox from "./pages/Inbox/Inbox";
import Today from "./pages/Today/Today";
import Upcoming from "./pages/Upcoming/Upcoming";
import TrainingCenter from "./pages/TrainingCenter/TrainingCenter";
import PageWrapper from "./components/layout/PageWrapper";
import Statsbar from "./components/layout/StatsBar/Statsbar";

export default function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Header setOpen={setIsSideNavOpen} isSideNavOpen={isSideNavOpen} />
        <SideNav isSideNavOpen={isSideNavOpen} />
        <main>
          <PageWrapper isSideNavOpen={isSideNavOpen}>
            <Statsbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/today" element={<Today />} />
              <Route path="/incoming" element={<Inbox />} />
              <Route path="/missions" element={<Upcoming />} />
              <Route path="/training-center" element={<TrainingCenter />} />
            </Routes>
          </PageWrapper>
        </main>
      </BrowserRouter>
    </>
  );
}
