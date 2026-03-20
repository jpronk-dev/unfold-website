import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'nl']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some(l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`)
  if (hasLocale) return NextResponse.next()
  const accept = request.headers.get('accept-language') ?? ''
  const lang = accept.toLowerCase().startsWith('nl') ? 'nl' : 'en'
  const url = request.nextUrl.clone()
  url.pathname = `/${lang}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|images|favicon|apple-touch|mstile|og-image|android|.*\\..*).*)',],
}
