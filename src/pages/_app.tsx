import '@/styles/globals.css'
import * as style from '../styles/header'
import { FaBlogger, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import type { AppProps } from 'next/app'
import { useState } from 'react'

import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <style.Header>
        <nav>
          <Link href="/" className="link">
            <FaBlogger size={30} />
            <h1>social media</h1>
          </Link>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose size={32} />
            ) : (
              <AiOutlineMenu size={32} />
            )}
          </button>
          <ul className={isOpen ? 'menu-open' : 'menu-close'}>
            <li>
              <Link href="/" className="link-li">
                <span>
                  <FaGithubSquare />
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
