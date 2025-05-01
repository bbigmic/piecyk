import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-piecyk-beige to-white">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/hero-image.jpg"
          alt="Piecyk Bistro - Pizza z pieca opalanego drewnem"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-8 p-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
            Piecyk Bistro
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)] max-w-2xl font-medium">
            Serce włoskiej pizzy 🍕 i chleba na zakwasie w Dębicy
          </p>
          <a
            href="/menu"
            className="bg-piecyk-green hover:bg-opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Zobacz nasze menu
          </a>
        </div>
      </section>

      {/* Oferta Section */}
      <section className="py-16 bg-gradient-to-b from-piecyk-beige/40 to-piecyk-beige/20">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-piecyk-green">Dlaczego warto nas odwiedzić?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-piecyk-green">Pizza z tradycyjnego pieca</h3>
              <p className="text-gray-700">
                Spróbuj autentycznej włoskiej pizzy przygotowanej w tradycyjnym piecu opalanym drewnem. 
                Cienkie, chrupiące ciasto i wyjątkowe dodatki - to smak, który zapamiętasz na długo.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-piecyk-green">Świeże wypieki</h3>
              <p className="text-gray-700">
                Codziennie rano wyciągamy z pieca pachnące bochenki chleba, bułki i słodkie wypieki. 
                Wszystko przygotowane z naturalnych składników, bez konserwantów.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-piecyk-green">Domowa atmosfera</h3>
              <p className="text-gray-700">
                Zapraszamy do naszego przytulnego lokalu, gdzie poczujesz się jak w domu. 
                Idealne miejsce na rodzinny obiad, spotkanie ze znajomymi lub romantyczną kolację.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specjalności Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/specialties-bg.jpg"
            alt="Tło - pizza i pieczywo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">Nasze specjalności</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-gradient-to-b from-piecyk-beige/90 to-piecyk-beige/70 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-piecyk-green">Pizza Margherita</h3>
              <p className="text-gray-700 mb-4">
                Klasyczna pizza z pomidorami San Marzano, świeżą mozzarellą i bazylią. 
                Prosto z pieca opalanego drewnem - smak, który pokochasz od pierwszego kęsa.
              </p>
              <span className="text-piecyk-green font-semibold">39 zł</span>
            </div>
            <div className="bg-white bg-gradient-to-b from-piecyk-beige/90 to-piecyk-beige/70 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-piecyk-green">Chleb wiejski</h3>
              <p className="text-gray-700 mb-4">
                Tradycyjny chleb na zakwasie, wypiekany codziennie rano. 
                Chrupiąca skórka i puszyste wnętrze - idealny do śniadania i kolacji.
              </p>
              <span className="text-piecyk-green font-semibold">15 zł</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-piecyk-beige/40 to-transparent">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-piecyk-green">Zarezerwuj stolik</h2>
          <p className="text-xl mb-8 text-gray-700">
            Chcesz spróbować najlepszej pizzy w mieście i świeżych wypieków? 
            Zarezerwuj stolik już dziś i daj się zaskoczyć naszymi smakami!
          </p>
          <a
            href="/kontakt"
            className="bg-piecyk-green hover:bg-opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Rezerwacja
          </a>
        </div>
      </section>
    </div>
  )
} 