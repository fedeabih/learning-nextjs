import Navbar from '@/components/Navbar'
import { Roboto } from 'next/font/google'
import "./globals.css"

export const metadata = {
  title: "Mi tienda con Nextjs - HomePage",
  description: "This is the home page",
  keywords: "tienda, online, home"

}

const roboto = Roboto(
  {
    weight: ["300","400", "500", "700"],
    styles: ["italic","normal"],
    subsets: ["latin"]
  }
)

export default function RootLayout({ children }) {
  return (
  <html>
    <body className={roboto.className}>
      <Navbar />

      {children}
    </body>
  </html>
    );
}