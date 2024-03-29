import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// --------- Pages & Components ---------
import Header from "./components/layout/Header";
import SideNav from "./components/layout/SideNav/SideNav";
import Inbox from "./pages/Inbox/Inbox";
import Today from "./pages/Today/Today";
import PageWrapper from "./components/layout/PageWrapper";
import Statsbar from "./components/layout/StatsBar/Statsbar";
import TaskModal from "./components/common/TaskModal/TaskModal";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  useEffect(() => {
    fetchTaskData();
  }, []);

  const fetchTaskData = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();

    setTasks(data);
  };

  return (
    <>
      <BrowserRouter>
        <Header
          setIsSideNavOpen={setIsSideNavOpen}
          isSideNavOpen={isSideNavOpen}
        />
        <SideNav isSideNavOpen={isSideNavOpen} />
        <PageWrapper isSideNavOpen={isSideNavOpen}>
          <Statsbar />
          <Routes>
            <Route path="/" element={<Today tasks={tasks} />} />
            <Route path="/incoming" element={<Inbox tasks={tasks} />}>
              <Route path=":taskId" element={<TaskModal tasks={tasks} />} />
            </Route>
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </>
  );
}
