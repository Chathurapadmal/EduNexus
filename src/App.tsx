import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useAuth } from './context/AuthContext'

// Redirect to dashboard if authenticated, otherwise show login
function Home() {
  const auth = useAuth()
  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }
  return <Navigate to="/login" replace />
}

function App() {
  const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const auth = useAuth()
    if (!auth.isAuthenticated) return <Navigate to="/login" replace />
    return <>{children}</>
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
    </Routes>
  )
}

export default App
