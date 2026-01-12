import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Layout({ children, title, description, image, url }) {
  const siteName = "Oma Moy";
  const siteUrl = "https://omamoy.com";
  const pageTitle = title ? `${title} | ${siteName}` : `${siteName} - Madu Hutan Asli NTT`;
  const pageDesc = description || "Madu hutan asli 100% dari Kefamenanu, NTT. Tanpa bahan pengawet, diambil langsung dari alam.";
  const pageImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/hero-honey.png`;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImage} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <motion.main 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex-grow pt-20" 
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
