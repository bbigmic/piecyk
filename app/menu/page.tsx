import { prisma } from '@/lib/prisma'

async function getMenuItems() {
  const items = await prisma.menuItem.findMany({
    orderBy: {
      category: 'asc'
    }
  })
  return items
}

const categoryLabels: Record<string, string> = {
  'pizza': 'Pizza',
  'bakery': 'Piekarnia',
  'drinks': 'Napoje'
}

export default async function Menu() {
  const menuItems = await getMenuItems()
  
  // Grupowanie pozycji według kategorii
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof menuItems>)

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nasze Menu</h1>
        
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center capitalize">
              {categoryLabels[category] || category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold text-red-600">{item.price.toFixed(2)} zł</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <p className="text-lg mb-4">* Ceny zawierają podatek VAT</p>
          <p className="text-lg">** Menu może ulec zmianie w zależności od sezonowości produktów</p>
        </div>
      </div>
    </div>
  )
} 