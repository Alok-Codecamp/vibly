import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside


export function middleware(request: NextRequest) {
  const protectedRoute = ['/','/about']    
    const token = request.cookies.get('refreshToken')?.value;
    // const token = 'abcd'
    const { pathname } = request.nextUrl;

  if(protectedRoute.includes(pathname)){
    if(!token){
    return NextResponse.rewrite(new URL('/login',request.url))
    }
return NextResponse.next();
  
}
}

export const config = {
  matcher: ['/','/about'],
}
