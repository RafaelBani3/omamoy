import Button from "@/components/ui/Button";

// CTA Section
export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 bg-leaf-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4B400_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-cream-bg mb-6">
          Rasakan Kemurnian Alam
        </h2>
        <p className="text-lg text-cream-bg/80 max-w-2xl mx-auto mb-10">
          Stok madu hutan kami terbatas karena bergantung pada musim panen alami. 
          Pesan sekarang sebelum kehabisan.
        </p>
        <Button href="/produk" variant="primary" className="text-lg px-8 py-4">
          Pesan via WhatsApp
        </Button>
      </div>
    </section>
  );
}
