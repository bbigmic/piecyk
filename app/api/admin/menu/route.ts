import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const menuItems = await prisma.menuItem.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(menuItems)
  } catch (error) {
    console.error('Błąd podczas pobierania menu:', error)
    return NextResponse.json(
      { error: 'Błąd podczas pobierania menu' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newItem = await prisma.menuItem.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        category: body.category
      }
    })
    return NextResponse.json(newItem)
  } catch (error) {
    console.error('Błąd podczas dodawania pozycji do menu:', error)
    return NextResponse.json(
      { error: 'Błąd podczas dodawania pozycji do menu' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updatedData } = await request.json()
    const updatedItem = await prisma.menuItem.update({
      where: { id },
      data: {
        ...updatedData,
        price: parseFloat(updatedData.price)
      }
    })
    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error('Błąd podczas aktualizacji pozycji:', error)
    return NextResponse.json(
      { error: 'Błąd podczas aktualizacji pozycji' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.menuItem.delete({
      where: { id }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Błąd podczas usuwania pozycji:', error)
    return NextResponse.json(
      { error: 'Błąd podczas usuwania pozycji' },
      { status: 500 }
    )
  }
} 