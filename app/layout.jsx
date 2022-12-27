import { Open_Sans } from '@next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

const openSansFont = Open_Sans({
  weights: [300, 400, 600, 700],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={openSansFont.className}>
      <body className="container mx-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
