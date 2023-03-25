import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FaBlogger, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { styled } from '../../stitches.config'

import * as style from '../styles/header'

import Link from 'next/link'

const Container = styled('div', {
  width: '100%',
  maxWidth: '1124px',
  margin: '0 auto',
  padding: '20px 15px',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <style.Header>
        <nav>
          <Link href="/" className="link">
            <FaBlogger />
            <h1>social media</h1>
          </Link>

          <style.Ul color={{ '@bp1': 'white', '@bp2': 'white' }}>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithubSquare />
            </li>
          </style.Ul>
        </nav>
      </style.Header>
      <Component {...pageProps} />
    </Container>
  )
}
