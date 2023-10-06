'use client'
import './globals.css';
import Link from 'next/link';

import Providers from './redux/providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className="bg-blue-600 h-16 hy-5 flex items-center">
          <ul className='flex space-x-8 mx-8 font-bold text-white'>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>

  )
}
