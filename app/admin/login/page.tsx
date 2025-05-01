'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/admin')
      } else {
        setError('Nieprawidłowe hasło')
      }
    } catch (err) {
      setError('Wystąpił błąd podczas logowania')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-piecyk-beige">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-piecyk-green mb-6 text-center">Panel Admina</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Hasło
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-piecyk-green focus:border-piecyk-green"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-piecyk-green text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Zaloguj się
          </button>
        </form>
      </div>
    </div>
  )
} 