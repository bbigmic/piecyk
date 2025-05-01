import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const cookieStore = cookies()
    cookieStore.delete('admin_token')

    return NextResponse.json({ success: true, message: 'Wylogowano pomyślnie' })
  } catch (error) {
    console.error('Błąd podczas wylogowywania:', error)
    return NextResponse.json(
      { success: false, message: 'Wystąpił błąd podczas wylogowywania' },
      { status: 500 }
    )
  }
} 