import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'normalize.css/normalize.css'
import StyledComponentsRegistry from "@/presentation/config/registry";
import Header from "@/presentation/components/layout/Header";
import Footer from "@/presentation/components/layout/Footer";
import ContactUsWidget from "@/presentation/components/layout/ContactUsWidget";
import Providers from "@/presentation/redux/Provider";
import BurgerMenu from "@/presentation/components/layout/BurgerMenu";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pichincha Miles',
  description: 'Le damos más valor a tus millas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          <BurgerMenu/>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
          <Footer/>
          <ContactUsWidget/>
        </Providers>
      </body>
    </html>
  )
}
