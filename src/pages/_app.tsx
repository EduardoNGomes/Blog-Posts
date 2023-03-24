import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FaBlogger, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import * as style from '../styles/header'

import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style.Header>
        <nav>
          <Link href="/">
            <FaBlogger />
            <h1>social Media</h1>
          </Link>

          <ul>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithubSquare />
            </li>
          </ul>
        </nav>
      </style.Header>
      <Component {...pageProps} />
    </div>
  )
}
