import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside


export function middleware(request: NextRequest) {
  const protectedRoute = ['/','/about']    
    const token = request.cookies.get('refreshToken')?.value;
    // const token = 'abcd'
    const { pathname } = request.nextUrl;
    const isProtectedRoute = protectedRoute.includes(pathname);
    console.log(request.arrayBuffer)
  if(!token && isProtectedRoute){
    
    const loginUrl = new URL('/login',request.url)
    loginUrl.searchParams.set('redirect',pathname);
    return NextResponse.redirect(loginUrl)
  }
return NextResponse.next();
  
}

export const config = {
  matcher: ['/','/about'],
}
