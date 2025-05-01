'use client'

import { useState, useEffect } from 'react'
import AdminNav from '../components/AdminNav'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  image?: string
}

export default function NewsManagement() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [newItem, setNewItem] = useState<Omit<NewsItem, 'id'>>({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
  })

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/admin/news')
      if (response.ok) {
        const data = await response.json()
        setNewsItems(data)
      }
    } catch (error) {
      console.error('Błąd podczas pobierania aktualności:', error)
    }
  }

  const handleAddItem = async () => {
    try {
      const response = await fetch('/api/admin/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })

      if (response.ok) {
        const addedItem = await response.json()
        setNewsItems([...newsItems, addedItem])
        setIsAdding(false)
        setNewItem({
          title: '',
          content: '',
          date: new Date().toISOString().split('T')[0],
        })
      }
    } catch (error) {
      console.error('Błąd podczas dodawania aktualności:', error)
    }
  }

  return (
    <div className="min-h-screen bg-piecyk-beige">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-piecyk-green">Zarządzanie Aktualnościami</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-piecyk-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
          >
            Dodaj nową aktualność
          </button>
        </div>

        {isAdding && (
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-6 text-piecyk-green">Dodaj nową aktualność</h2>
            <div className="space-y-6">
              <Input
                label="Tytuł"
                value={newItem.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItem({ ...newItem, title: e.target.value })}
                placeholder="Wprowadź tytuł aktualności"
              />
              <Textarea
                label="Treść"
                value={newItem.content}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewItem({ ...newItem, content: e.target.value })}
                placeholder="Wprowadź treść aktualności"
              />
              <Input
                label="Data"
                type="date"
                value={newItem.date}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItem({ ...newItem, date: e.target.value })}
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
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <div className="text-sm text-gray-500">
                Data: {new Date(item.date).toLocaleDateString('pl-PL')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 