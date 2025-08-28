import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, isIOS, adType } = body

    // Validação básica
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      )
    }

    // Validação do formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Validação do adType (deve ser A, B, C ou null/undefined)
    if (adType && !['A', 'B', 'C'].includes(adType)) {
      return NextResponse.json(
        { error: 'Tipo de anúncio inválido. Deve ser A, B ou C' },
        { status: 400 }
      )
    }

    // Salvar no banco de dados
    const savedEmail = await prisma.email.create({
      data: {
        email: email.toLowerCase().trim(),
        isIOS: Boolean(isIOS),
        adType: adType || null,
      },
    })

    return NextResponse.json(
      { 
        message: 'Email salvo com sucesso!',
        id: savedEmail.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Erro ao salvar email:', error)
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Endpoint para listar emails (opcional, para fins de desenvolvimento)
export async function GET() {
  try {
    const emails = await prisma.email.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ emails })
  } catch (error) {
    console.error('Erro ao buscar emails:', error)
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
