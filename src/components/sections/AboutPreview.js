import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-forest-brown aspect-[4/3] group">
               <Image 
                 src="/images/about-harvest.png" 
                 alt="Panen Madu Hutan Tradisional" 
                 fill
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-brown mb-6">
              Warisan Alam Kefamenanu
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Semuanya berawal dari Oma Moy, yang percaya bahwa hutan kita menyimpan obat terbaik. Dikumpulkan oleh pemburu lebah tradisional secara lestari, setiap tetes madu ini membawa cerita hutan NTT ke meja makan Anda.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bukan sekadar manis, tapi tentang menjaga tradisi dan kesehatan keluarga secara alami.
            </p>
            <Button href="/tentang-madu" variant="secondary">
              Baca Cerita Lengkap
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
