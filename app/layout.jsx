import { Open_Sans } from "@next/font/google"
import "../styles/globals.css"

const openSansFont = Open_Sans({
  weights: [300, 400, 600, 700],
})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={openSansFont.className}>
      <body className="container mx-auto">
        <header>
          <p>Header</p>
        </header>
        <main>{children}</main>
        <footer className="container mx-auto">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
