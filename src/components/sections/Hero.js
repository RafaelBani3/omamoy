import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-cream-bg overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block py-1 px-3 rounded-full bg-honey-yellow/20 text-dark-honey text-sm font-semibold mb-6"
            >
              100% Madu Hutan Asli NTT
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif font-bold text-forest-brown leading-tight mb-6"
            >
              Murni dari Alam, <br />
              <span className="text-honey-yellow">Sehat untuk Keluarga</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Oma Moy menghadirkan kemurnian madu hutan liar Kefamenanu. 
              Tanpa proses pemanasan, tanpa campuran, langsung dari sarang lebah ke tangan Anda.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button href="/produk" variant="primary">
                Pesan Sekarang
              </Button>
              <Button href="/tentang-madu" variant="outline">
                Cerita Kami
              </Button>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative w-full max-w-md"
            >
               {/* Product Image */}
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                  <Image 
                    src="/images/hero-honey.png" 
                    alt="Madu Hutan Oma Moy" 
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
               </div>
               
               {/* Floating Badge */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg flex items-center gap-3 border border-honey-yellow/30"
               >
                 <div className="bg-green-100 p-2 rounded-full">
                   <span className="text-2xl">🌿</span>
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-semibold uppercase">Tanpa Campuran</p>
                   <p className="text-forest-brown font-bold text-lg">100% Murni</p>
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
