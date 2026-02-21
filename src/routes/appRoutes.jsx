import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProjects from "../pages/AllProjects";
import ProjectDetail from "../pages/ProjectDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="portofolio" element={<AllProjects />} />
        <Route path="portofolio/:slug" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}
