import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const auth = useAuth()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email) return setError('Please enter your email')
    if (!password) return setError('Please enter your password')

    // mock auth: accept any non-empty credentials
    console.log('Login attempt', { email })
    auth.login(email) // Pass email to store user info
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-bg px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
        aria-label="Login form"
      >
        <h2 className="text-2xl font-semibold text-text-main mb-4">Sign in</h2>

        {error && <div className="text-red-600 mb-3">{error}</div>}

        <label className="block text-sm font-medium text-text-secondary mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />

        <label className="block text-sm font-medium text-text-secondary mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-brand-primary text-white rounded-md hover:opacity-95"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}
