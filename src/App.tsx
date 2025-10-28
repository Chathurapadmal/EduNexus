import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Dashboard from "./pages/Dashboard/Hr/dashboard";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/hr/dashboard" element={<Dashboard />} />
        {/* add: /hr/requisitions, /employee/leave, etc. */}
      </Route>
      <Route path="*" element={<Navigate to="/hr/dashboard" replace />} />
    </Routes>
  );
}
