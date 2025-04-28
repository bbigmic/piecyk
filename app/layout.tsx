import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Piecyk Bistro - Pizza z pieca opalanego drewnem',
  description: 'Prawdziwa pizza z pieca opalanego drewnem i świeże wypieki. Najlepsza pizza i pieczywo w mieście.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-piecyk-beige`}>
        <header className="bg-piecyk-beige">
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
                <p>ul. Przykładowa 123</p>
                <p>00-000 Warszawa</p>
                <p>Tel: +48 123 456 789</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Godziny otwarcia</h3>
                <p>Poniedziałek - Piątek: 12:00 - 22:00</p>
                <p>Sobota - Niedziela: 11:00 - 23:00</p>
                <p className="mt-2 text-sm">Piekarnia otwarta od 7:00</p>
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