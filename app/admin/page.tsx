'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import AdminNav from './components/AdminNav'

interface Stats {
  menuItems: number
  activeReservations: number
  newsItems: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats>({
    menuItems: 0,
    activeReservations: 0,
    newsItems: 0
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Pobieranie liczby pozycji menu
        const menuResponse = await fetch('/api/admin/menu')
        const menuItems = await menuResponse.json()
        
        // Pobieranie rezerwacji
        const reservationsResponse = await fetch('/api/admin/reservations')
        const reservations = await reservationsResponse.json()
        
        // Pobieranie aktualności
        const newsResponse = await fetch('/api/admin/news')
        const newsItems = await newsResponse.json()

        setStats({
          menuItems: menuItems.length,
          activeReservations: reservations.filter((r: any) => r.status === 'pending').length,
          newsItems: newsItems.length
        })
      } catch (error) {
        console.error('Błąd podczas pobierania statystyk:', error)
      }
    }

    fetchStats()
  }, [])

  const menuItems = [
    {
      title: 'Zarządzanie Menu',
      description: 'Dodawaj, edytuj i usuwaj pozycje z menu',
      href: '/admin/menu',
      icon: '🍕'
    },
    {
      title: 'Rezerwacje',
      description: 'Zarządzaj rezerwacjami i ich statusami',
      href: '/admin/reservations',
      icon: '📅'
    },
    {
      title: 'Aktualności',
      description: 'Dodawaj i zarządzaj aktualnościami',
      href: '/admin/news',
      icon: '📢'
    }
  ]

  return (
    <div className="min-h-screen bg-piecyk-beige">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-piecyk-green mb-8">Panel Administracyjny</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.href}
              onClick={() => router.push(item.href)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <h2 className="text-xl font-semibold text-piecyk-green">{item.title}</h2>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-piecyk-green mb-4">Statystyki</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-piecyk-beige p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700">Liczba pozycji w menu</h3>
              <p className="text-2xl font-bold text-piecyk-green">{stats.menuItems}</p>
            </div>
            <div className="bg-piecyk-beige p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700">Aktywne rezerwacje</h3>
              <p className="text-2xl font-bold text-piecyk-green">{stats.activeReservations}</p>
            </div>
            <div className="bg-piecyk-beige p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700">Aktualności</h3>
              <p className="text-2xl font-bold text-piecyk-green">{stats.newsItems}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 