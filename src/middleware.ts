import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside


export function middleware(request: NextRequest) {
    
    // const token = request.cookies.get('refreshToken')?.value;
    const token = 'abcd'
    const { pathname } = request.nextUrl;
  console.log(pathname);

  if(pathname === '/'){
    if(!token){
    return NextResponse.rewrite(new URL('/login',request.url))
    }
return NextResponse.rewrite(new URL('/about',request.url))
  
}
}

export const config = {
  matcher: ['/'],
}
