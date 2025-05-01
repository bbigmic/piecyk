import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Piecyk Bistro - Serce włoskiej pizzy 🍕 i chleba na zakwasie w Dębicy',
  description: 'Prawdziwa pizza z pieca opalanego drewnem i świeże wypieki. Najlepsza pizza i pieczywo w mieście. Serce włoskiej pizzy 🍕 i chleba na zakwasie w Dębicy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-piecyk-beige`}>
        <header className="bg-piecyk-beige shadow-md">
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-piecyk-green text-white py-8">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                <p>Wielopolska 54</p>
                <p>39-200 Dębica</p>
                <p>Tel: +48 123 456 789</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Godziny otwarcia</h3>
                <p>Poniedziałek - Czwartek: 7:00 - 21:00</p>
                <p>Piątek - Sobota: 7:00 - 22:00</p>
                <p>Niedziela: 12:00 - 21:00</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Śledź nas</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-piecyk-beige">Facebook</a>
                  <a href="#" className="hover:text-piecyk-beige">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 