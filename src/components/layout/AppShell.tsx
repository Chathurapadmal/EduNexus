import { Link, Outlet, useLocation } from "react-router-dom";

function SidebarItem({ to, label }: { to: string; label: string }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-lg transition ${
        active
          ? "bg-white/15 text-white"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

export default function AppShell() {
  return (
    <div className="min-h-screen bg-surface-bg text-text-main flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-sidebar text-white p-4 space-y-2">
        <div className="mb-4">
          <h1 className="text-xl font-semibold">EduNexus HR</h1>
          <p className="text-white/70 text-sm">Admin Panel</p>
        </div>
        <nav className="space-y-1">
          <SidebarItem to="/hr/dashboard" label="Dashboard" />
          <SidebarItem to="/hr/requisitions" label="Requisitions" />
          <SidebarItem to="/hr/onboarding" label="Onboarding" />
          <SidebarItem to="/employee/leave" label="Leave" />
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-surface-card border-b border-gray-100 px-6 h-14 flex items-center justify-between">
          <div className="text-sm text-text-secondary">Welcome back 👋</div>
          <div className="flex items-center gap-3">
            <button className="btn-ghost">Switch theme</button>
            <div className="w-8 h-8 rounded-full bg-brand-secondary/30" />
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
