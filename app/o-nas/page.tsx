import Image from 'next/image'

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">O Nas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nasza Historia</h2>
            <p className="text-gray-600 mb-4">
              Restauracja Piecyk powstała w 2010 roku z pasji do dobrego jedzenia i wyjątkowej atmosfery.
              Od samego początku stawiamy na jakość, świeże składniki i tradycyjne receptury.
            </p>
            <p className="text-gray-600">
              Nasz zespół składa się z doświadczonych szefów kuchni, którzy każdego dnia przygotowują
              wyjątkowe dania, łącząc tradycję z nowoczesnymi trendami kulinarnymi.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/restaurant-interior.jpg"
              alt="Wnętrze restauracji"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Świeże Składniki</h3>
            <p className="text-gray-600">
              Współpracujemy z lokalnymi dostawcami, aby zapewnić najwyższą jakość składników.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Profesjonalna Obsługa</h3>
            <p className="text-gray-600">
              Nasz zespół dba o to, aby każdy gość czuł się wyjątkowo i komfortowo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Wyjątkowa Atmosfera</h3>
            <p className="text-gray-600">
              Stworzyliśmy przytulne wnętrze, które sprzyja relaksowi i miłym spotkaniom.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Nasze Wartości</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Jakość</h3>
              <p className="text-gray-600">
                Każde danie przygotowujemy z najwyższą starannością, dbając o każdy szczegół.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tradycja</h3>
              <p className="text-gray-600">
                Szanujemy tradycyjne receptury, jednocześnie wprowadzając nowoczesne akcenty.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Gościnność</h3>
              <p className="text-gray-600">
                Każdy gość jest dla nas wyjątkowy i staramy się, aby czuł się u nas jak w domu.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Innowacja</h3>
              <p className="text-gray-600">
                Ciągle rozwijamy nasze menu i wprowadzamy nowe, ciekawe smaki.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 