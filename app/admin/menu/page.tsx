'use client'

import { useState, useEffect } from 'react'
import AdminNav from '../components/AdminNav'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Select from '../components/Select'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [newItem, setNewItem] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    description: '',
    price: 0,
    category: 'pizza'
  })

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('/api/admin/menu')
      if (response.ok) {
        const data = await response.json()
        setMenuItems(data)
      }
    } catch (error) {
      console.error('Błąd podczas pobierania menu:', error)
    }
  }

  const handleAddItem = async () => {
    try {
      const response = await fetch('/api/admin/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })

      if (response.ok) {
        const addedItem = await response.json()
        setMenuItems([...menuItems, addedItem])
        setIsAdding(false)
        setNewItem({
          name: '',
          description: '',
          price: 0,
          category: 'pizza'
        })
      }
    } catch (error) {
      console.error('Błąd podczas dodawania pozycji:', error)
    }
  }

  const handleDeleteItem = async (id: string) => {
    try {
      const response = await fetch('/api/admin/menu', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      if (response.ok) {
        setMenuItems(menuItems.filter(item => item.id !== id))
      }
    } catch (error) {
      console.error('Błąd podczas usuwania pozycji:', error)
    }
  }

  return (
    <div className="min-h-screen bg-piecyk-beige">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-piecyk-green">Zarządzanie Menu</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-piecyk-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
          >
            Dodaj nową pozycję
          </button>
        </div>

        {isAdding && (
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-6 text-piecyk-green">Dodaj nową pozycję</h2>
            <div className="space-y-6">
              <Input
                label="Nazwa"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Wprowadź nazwę pozycji"
              />
              <Textarea
                label="Opis"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                placeholder="Wprowadź opis pozycji"
              />
              <Input
                label="Cena"
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                placeholder="Wprowadź cenę"
                min="0"
                step="0.01"
              />
              <Select
                label="Kategoria"
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                options={[
                  { value: 'pizza', label: 'Pizza' },
                  { value: 'bakery', label: 'Piekarnia' },
                  { value: 'drinks', label: 'Napoje' }
                ]}
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Anuluj
                </button>
                <button
                  onClick={handleAddItem}
                  className="bg-piecyk-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Dodaj
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-lg font-bold text-piecyk-green">{item.price.toFixed(2)} zł</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 capitalize">{item.category}</span>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Usuń
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 