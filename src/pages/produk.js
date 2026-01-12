import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { generateWhatsAppLink, CONTACT_NUMBER } from "@/utils/whatsapp";
import { motion } from "framer-motion";

export default function Produk() {
  const products = [
    {
      id: 1,
      name: "Madu Hutan Asli (600ml)",
      price: "Rp 150.000",
      description: "Botol kaca premium. Cocok untuk konsumsi harian keluarga.",
      tags: ["Best Seller", "Keluarga"],
    },
    {
      id: 2,
      name: "Madu Hutan Asli (300ml)",
      price: "Rp 85.000",
      description: "Ukuran praktis. Pas untuk dibawa bepergian atau percobaan.",
      tags: ["Praktis", "Travel"],
    },
    {
      id: 3,
      name: "Paket Hampers Sehat",
      price: "Rp 250.000",
      description: "2 botol 300ml + sendok kayu + box eksklusif. Hadiah sehat untuk kerabat.",
      tags: ["Gift", "Premium"],
    }
  ];

  return (
    <Layout 
      title="Produk Madu Hutan Oma Moy"
      description="Beli madu hutan asli Kefamenanu. Tersedia berbagai ukuran. Pesan langsung via WhatsApp."
      url="/produk"
      image="/images/hero-honey.png"
    >
      <section className="relative pt-32 pb-32 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-honey.png" 
            alt="Madu Hutan Oma Moy" 
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-honey-yellow text-forest-brown border-none">Edisi Terbatas</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Pilih Kebaikan Alam
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Stok kami bergantung pada musim panen hutan. Dapatkan selagi tersedia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col h-full hover:border-honey-yellow transition-colors duration-300">
                {/* Image Placeholder */}
                <div className="bg-cream-bg rounded-xl aspect-square mb-6 flex items-center justify-center relative overflow-hidden group">
                  <Image 
                    src={
                      product.id === 1 ? "/images/product-600.png" : 
                      product.id === 2 ? "/images/product-300.png" : 
                      "/images/product-hampers.png"
                    }
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex gap-2 mb-3">
                    {product.tags.map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-forest-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-forest-brown font-semibold text-xl mb-4 text-honey-yellow">
                    {product.price}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                </div>

                <Button 
                  href={generateWhatsAppLink(CONTACT_NUMBER, `Halo Oma Moy, saya mau pesan ${product.name}. Apakah stok masih ada?`)}
                  variant="primary" 
                  fullWidth
                  target="_blank"
                >
                  Pesan via WhatsApp
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
