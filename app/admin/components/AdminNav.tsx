'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-piecyk-green text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/admin" className="text-xl font-bold">
            Panel Admina
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/admin/menu"
              className={`px-3 py-2 rounded ${isActive('/admin/menu') ? 'bg-white text-piecyk-green' : 'hover:bg-white hover:text-piecyk-green'}`}
            >
              Menu
            </Link>
            <Link
              href="/admin/reservations"
              className={`px-3 py-2 rounded ${isActive('/admin/reservations') ? 'bg-white text-piecyk-green' : 'hover:bg-white hover:text-piecyk-green'}`}
            >
              Rezerwacje
            </Link>
            <Link
              href="/admin/news"
              className={`px-3 py-2 rounded ${isActive('/admin/news') ? 'bg-white text-piecyk-green' : 'hover:bg-white hover:text-piecyk-green'}`}
            >
              Aktualności
            </Link>
            <button
              onClick={async () => {
                await fetch('/api/admin/logout', { method: 'POST' })
                window.location.href = '/admin/login'
              }}
              className="px-3 py-2 rounded hover:bg-white hover:text-piecyk-green"
            >
              Wyloguj
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 