import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MoteursPage } from "./pages/MoteursPage";
import { PareChocsPage } from "./pages/PareChocsPage";
import { AlternateursPage } from "./pages/AlternateursPage";
import { DemarreursPage } from "./pages/DemarreursPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/moteurs" element={<MoteursPage />} />
        <Route path="/pare-chocs" element={<PareChocsPage />} />
        <Route path="/alternateurs" element={<AlternateursPage />} />
        <Route path="/demarreurs" element={<DemarreursPage />} />
      </Route>
    </Routes>
  );
}
