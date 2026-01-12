import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/ui/Card";

const reviews = [
  {
    id: 1,
    name: "Dr. Sarah Utami",
    role: "Dokter Umum",
    rating: 5,
    text: "Madu hutan Oma Moy benar-benar murni. Saya selalu sarankan pasien saya untuk konsumsi madu asli, dan ini salah satu yang terbaik yang pernah saya coba. Teksturnya kental dan aromanya khas hutan."
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Penikmat Madu",
    rating: 5,
    text: "Awalnya ragu beli online, tapi pas datang packingnya aman banget. Pas dicoba, rasanya beda sama madu supermarket. Ada rasa sedikit asam segar yang menandakan fermentasi alami madu hutan. Repeat order!"
  },
  {
    id: 3,
    name: "Jessica Tan",
    role: "Ibu Rumah Tangga",
    rating: 5,
    text: "Anak-anak suka sekali. Minum ini tiap pagi buat jaga imun, apalagi musim hujan. Botolnya juga premium, cocok banget buat kado atau hampers lebaran nanti."
  },
  {
    id: 4,
    name: "Ahmad Rizky",
    role: "Atlet Lari",
    rating: 5,
    text: "Sumber energi alami terbaik sebelum latihan. Saya lebih suka ini daripada energy gel buatan. Terasa khasiatnya di badan jadi lebih segar."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 md:py-28 bg-cream-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-forest-brown mb-4"
          >
            Kata Mereka
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Kejujuran rasa yang berbicara. Ribuan keluarga telah beralih ke Oma Moy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <Card className="bg-white border-none shadow-xl p-8 md:p-10 text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-honey-yellow text-honey-yellow" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    &quot;{reviews[currentIndex].text}&quot;
                  </p>
                  <div>
                    <h4 className="text-forest-brown font-bold text-lg">{reviews[currentIndex].name}</h4>
                    <span className="text-gray-400 text-sm font-medium">{reviews[currentIndex].role}</span>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white text-forest-brown shadow-md hover:bg-forest-brown hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white text-forest-brown shadow-md hover:bg-forest-brown hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-honey-yellow w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
