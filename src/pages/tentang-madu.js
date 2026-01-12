import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function TentangMadu() {
  return (
    <Layout 
      title="Tentang Madu Hutan Oma Moy"
      description="Pelajari perbedaan madu hutan asli Oma Moy dengan madu biasa. Tanpa proses pemanasan, murni dari alam Kefamenanu."
      url="/tentang-madu"
      image="/images/about-harvest.png"
    >
      {/* Header */}
      <section className="relative pt-32 pb-32 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-harvest.png" 
            alt="Memanen Madu Hutan Oma Moy" 
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Di Balik Kemurnian Oma Moy
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Sebuah janji untuk menjaga keaslian dari jantung hutan Kefamenanu, Nusa Tenggara Timur.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
           <h2 className="text-3xl font-serif font-bold text-forest-brown mb-6">Madu Hutan vs Madu Ternak</h2>
           <p className="text-gray-700 leading-relaxed mb-6">
             Madu Oma Moy bukanlah madu yang dihasilkan dari lebah ternak yang diberi makan gula. Kami bekerja sama dengan pemburu lebah tradisional di hutan pedalaman Kefamenanu.
           </p>
           <p className="text-gray-700 leading-relaxed mb-12">
             Lebah liar (Apis dorsata) mengumpulkan nektar dari ratusan jenis bunga hutan yang beragam (multiflora), menghasilkan rasa yang kaya, kompleks, dan khasiat yang jauh lebih tinggi dibandingkan madu monokultur.
           </p>

           {/* Comparison Table */}
           <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100 mb-12">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-forest-brown text-white">
                   <th className="p-4 font-serif text-lg">Karakteristik</th>
                   <th className="p-4 font-serif text-lg bg-honey-yellow text-forest-brown">Madu Oma Moy</th>
                   <th className="p-4 font-serif text-lg opacity-80">Madu Biasa (Pabrikan)</th>
                 </tr>
               </thead>
               <tbody className="bg-white">
                 <tr className="border-b border-gray-100">
                   <td className="p-4 font-semibold text-forest-brown">Sumber Nektar</td>
                   <td className="p-4 bg-cream-bg/30">Hutan Liar (Multiflora)</td>
                   <td className="p-4 text-gray-500">Perkebunan/Gula</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-4 font-semibold text-forest-brown">Proses</td>
                   <td className="p-4 bg-cream-bg/30">Tiris Alami (Raw Honey)</td>
                   <td className="p-4 text-gray-500">Pemanasan/Pasteurisasi</td>
                 </tr>
                 <tr className="border-b border-gray-100">
                   <td className="p-4 font-semibold text-forest-brown">Enzim & Vitamin</td>
                   <td className="p-4 bg-cream-bg/30">Utuh & Hidup</td>
                   <td className="p-4 text-gray-500">Rusak karena Panas</td>
                 </tr>
                 <tr>
                   <td className="p-4 font-semibold text-forest-brown">Rasa</td>
                   <td className="p-4 bg-cream-bg/30">Kompleks, Sedikit Asam Segar</td>
                   <td className="p-4 text-gray-500">Dominan Manis Gula</td>
                 </tr>
               </tbody>
             </table>
           </div>

           <div className="text-center">
             <Button href="/produk" variant="primary">
               Buktikan Khasiatnya
             </Button>
           </div>
        </div>
      </section>
    </Layout>
  );
}
