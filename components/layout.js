import utilStyles from '../styles/utils.module.css'
import Head from 'next/head';
import Link from 'next/link'
import Calendly from './calendly';
import Footer from './footer';

const name = 'Meet Roger'
export const siteTitle = 'Next.js JOIn Website'

export default function Layout({ children, home }) {
  return (
    <div class="wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <title>Meet Roger | Medicare is complicated, he makes it simple.</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header class="primary-header pt-10 pb-4 lg:pb-6 lg:pt-14 fixed top-0 left-0 w-full bg-white z-10">
          <div class="container mx-auto md:pl-10">
              <div class="logo w-36 xl:w-40 mx-auto md:mx-0">
                  <a class="block" href="/">
                      <img src="/images/logo.png" alt="logo" title="logo"/>
                  </a>
              </div>
          </div>
      </header>
      {children}
      <Calendly></Calendly>
      <Footer></Footer>
    </div>
  )
}