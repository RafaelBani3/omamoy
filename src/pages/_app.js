import "@/styles/globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${playfair.variable} ${inter.variable} antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
