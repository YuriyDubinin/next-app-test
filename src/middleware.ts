import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isLoggedIn: boolean = false;

export function middleware(request: NextRequest) {
    let headers = new Headers(request.headers);

    console.log('headers: ', headers);

    if (isLoggedIn) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ['/admins', '/main'],
};
