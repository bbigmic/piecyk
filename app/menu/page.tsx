export default function Menu() {
  const menuItems = [
    {
      category: 'Przystawki',
      items: [
        { name: 'Tatar wołowy', price: '45 zł', description: 'Tradycyjny tatar z żółtkiem i dodatkami' },
        { name: 'Krewetki w czosnku', price: '55 zł', description: 'Krewetki smażone na maśle z czosnkiem' },
        { name: 'Sałatka Cezar', price: '38 zł', description: 'Sałata rzymska, grzanki, parmezan, sos Cezar' },
      ],
    },
    {
      category: 'Dania główne',
      items: [
        { name: 'Stek wołowy', price: '120 zł', description: 'Polędwica wołowa 250g z dodatkami' },
        { name: 'Łosoś z grilla', price: '85 zł', description: 'Filet z łososia z warzywami sezonowymi' },
        { name: 'Risotto z grzybami', price: '65 zł', description: 'Risotto z mieszanką grzybów leśnych' },
      ],
    },
    {
      category: 'Desery',
      items: [
        { name: 'Tiramisu', price: '32 zł', description: 'Klasyczne włoskie tiramisu' },
        { name: 'Czekoladowy fondant', price: '35 zł', description: 'Ciepły deser czekoladowy z lodami' },
        { name: 'Sernik', price: '30 zł', description: 'Tradycyjny sernik z owocami' },
      ],
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nasze Menu</h1>
        
        {menuItems.map((category) => (
          <div key={category.category} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold text-red-600">{item.price}</span>
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