import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: {
        date: 'asc'
      }
    })
    return NextResponse.json(reservations)
  } catch (error) {
    console.error('Błąd podczas pobierania rezerwacji:', error)
    return NextResponse.json(
      { error: 'Błąd podczas pobierania rezerwacji' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newReservation = await prisma.reservation.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        date: new Date(body.date),
        time: body.time,
        guests: parseInt(body.guests),
        status: 'pending'
      }
    })
    return NextResponse.json(newReservation)
  } catch (error) {
    console.error('Błąd podczas dodawania rezerwacji:', error)
    return NextResponse.json(
      { error: 'Błąd podczas dodawania rezerwacji' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updatedData } = await request.json()
    const updatedReservation = await prisma.reservation.update({
      where: { id },
      data: {
        ...updatedData,
        date: updatedData.date ? new Date(updatedData.date) : undefined,
        guests: updatedData.guests ? parseInt(updatedData.guests) : undefined
      }
    })
    return NextResponse.json(updatedReservation)
  } catch (error) {
    console.error('Błąd podczas aktualizacji rezerwacji:', error)
    return NextResponse.json(
      { error: 'Błąd podczas aktualizacji rezerwacji' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.reservation.delete({
      where: { id }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Błąd podczas usuwania rezerwacji:', error)
    return NextResponse.json(
      { error: 'Błąd podczas usuwania rezerwacji' },
      { status: 500 }
    )
  }
} 