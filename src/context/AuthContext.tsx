import React, { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  user: { email: string } | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<{ email: string } | null>(null)

  useEffect(() => {
    // Restore from localStorage
    const saved = localStorage.getItem('edunexus:auth')
    const savedUser = localStorage.getItem('edunexus:user')
    if (saved === '1' && savedUser) {
      setIsAuthenticated(true)
      setUser(JSON.parse(savedUser))
    }
  }, [])

  function login(email: string) {
    localStorage.setItem('edunexus:auth', '1')
    localStorage.setItem('edunexus:user', JSON.stringify({ email }))
    setIsAuthenticated(true)
    setUser({ email })
  }

  function logout() {
    localStorage.removeItem('edunexus:auth')
    localStorage.removeItem('edunexus:user')
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
