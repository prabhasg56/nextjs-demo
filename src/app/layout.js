'use client'
import './globals.css';
import Link from 'next/link';

import store  from './redux/store'
import { Provider } from 'react-redux'


export default function RootLayout({ children }) {
  return (
    <div>
      <nav className="bg-blue-600 h-16 hy-5 flex items-center">
        <ul className='flex space-x-8 mx-8 font-bold text-white'>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </div>
  )
}
