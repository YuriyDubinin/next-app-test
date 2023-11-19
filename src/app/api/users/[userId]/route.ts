import { NextResponse } from 'next/server';

export async function GET(request: Request, context: any) {
    const user = {
        id: 1,
        name: 'Ololo',
    };
    return NextResponse.json({
        user,
    });
}
