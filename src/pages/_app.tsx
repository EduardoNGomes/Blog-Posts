import { globalStyles } from '@/styles/globals'
import * as style from '../styles/components/header'
import {
  FaBlogger,
  FaGithubSquare,
  FaLinkedin,
  FaFirstOrderAlt,
} from 'react-icons/fa'
import { Spin as Hamburger } from 'hamburger-react'

import type { AppProps } from 'next/app'
import { useState } from 'react'

import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <style.Header>
        <nav>
          <Link href="/" className="link">
            <FaBlogger size={30} />
            <h1>social media</h1>
          </Link>

          <button className="menu-button">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
          <ul className={isOpen ? 'menu open' : 'menu'}>
            <li>
              <Link href="/" className="link-li">
                <span>
                  <FaFirstOrderAlt />
                </span>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/eduardo-gomes-220610227/"
                className="link-li"
                target="_blank"
              >
                <span>
                  <FaLinkedin />
                </span>
                <p>LinkedIn</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/EduardoNGomes"
                className="link-li"
                target="_blank"
              >
                <span>
                  <FaGithubSquare />
                </span>
                <p>Github</p>
              </Link>
            </li>
          </ul>
        </nav>
      </style.Header>
      <Component {...pageProps} />
    </>
  )
}
