import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const news = await prisma.newsItem.findMany({
      orderBy: {
        date: 'desc'
      }
    })
    return NextResponse.json(news)
  } catch (error) {
    console.error('Błąd podczas pobierania aktualności:', error)
    return NextResponse.json(
      { error: 'Błąd podczas pobierania aktualności' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newNewsItem = await prisma.newsItem.create({
      data: {
        title: body.title,
        content: body.content,
        date: new Date(body.date),
        image: body.image || null
      }
    })
    return NextResponse.json(newNewsItem)
  } catch (error) {
    console.error('Błąd podczas dodawania aktualności:', error)
    return NextResponse.json(
      { error: 'Błąd podczas dodawania aktualności' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updatedData } = await request.json()
    const updatedNewsItem = await prisma.newsItem.update({
      where: { id },
      data: {
        ...updatedData,
        date: updatedData.date ? new Date(updatedData.date) : undefined
      }
    })
    return NextResponse.json(updatedNewsItem)
  } catch (error) {
    console.error('Błąd podczas aktualizacji aktualności:', error)
    return NextResponse.json(
      { error: 'Błąd podczas aktualizacji aktualności' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.newsItem.delete({
      where: { id }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Błąd podczas usuwania aktualności:', error)
    return NextResponse.json(
      { error: 'Błąd podczas usuwania aktualności' },
      { status: 500 }
    )
  }
} 