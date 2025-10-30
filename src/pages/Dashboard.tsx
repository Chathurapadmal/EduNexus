import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface SidebarItemProps {
  label: string;
  icon?: string;
  active?: boolean;
}

function SidebarItem({ label, active }: SidebarItemProps) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center p-3 text-sm rounded-lg hover:bg-surface-sidebar/10 ${
          active ? 'bg-surface-sidebar/20 text-brand-primary' : 'text-text-secondary'
        }`}
      >
        <span>{label}</span>
      </a>
    </li>
  )
}

export default function Dashboard() {
  const auth = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const user = auth.user

  function handleLogout() {
    auth.logout()
    navigate('/login')
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button 
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <span className="sr-only">Toggle sidebar</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <span className="ml-3 text-xl font-semibold text-text-main">EduNexus</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-text-secondary">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-20 w-64 h-screen pt-16 transition-transform bg-white border-r border-gray-200 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            <SidebarItem label="Dashboard" active />
            <SidebarItem label="Courses" />
            <SidebarItem label="Assignments" />
            <SidebarItem label="Calendar" />
            <SidebarItem label="Messages" />
            <SidebarItem label="Settings" />
          </ul>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className={`p-4 min-h-screen transition-all duration-200 ${
        sidebarOpen ? 'md:ml-64' : ''
      } pt-20`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Dashboard Cards */}
          <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Total Courses</h3>
            <p className="text-3xl font-bold text-brand-primary">12</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Active Assignments</h3>
            <p className="text-3xl font-bold text-brand-warning">5</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Messages</h3>
            <p className="text-3xl font-bold text-brand-accent">3</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
            <p className="text-3xl font-bold text-brand-secondary">7</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="p-3 bg-surface-bg rounded-lg">
              <p className="text-text-main">Assignment submitted for Computer Science</p>
              <span className="text-sm text-text-secondary">2 hours ago</span>
            </div>
            <div className="p-3 bg-surface-bg rounded-lg">
              <p className="text-text-main">New course material available</p>
              <span className="text-sm text-text-secondary">5 hours ago</span>
            </div>
            <div className="p-3 bg-surface-bg rounded-lg">
              <p className="text-text-main">Upcoming test reminder</p>
              <span className="text-sm text-text-secondary">1 day ago</span>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Upcoming Schedule</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-bg rounded-lg">
              <div>
                <p className="text-text-main font-medium">Database Management Systems</p>
                <p className="text-sm text-text-secondary">Lecture Hall A</p>
              </div>
              <span className="text-sm text-brand-primary">09:00 AM</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-bg rounded-lg">
              <div>
                <p className="text-text-main font-medium">Software Engineering</p>
                <p className="text-sm text-text-secondary">Room 401</p>
              </div>
              <span className="text-sm text-brand-primary">11:00 AM</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
