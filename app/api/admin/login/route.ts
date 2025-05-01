import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123' // W produkcji użyj zmiennej środowiskowej!

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === ADMIN_PASSWORD) {
      // W produkcji użyj bezpieczniejszego tokenu i szyfrowania
      const token = 'admin_session_' + Date.now()
      
      cookies().set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 godziny
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Nieprawidłowe hasło' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Błąd serwera' },
      { status: 500 }
    )
  }
} 