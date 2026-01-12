import Card from "@/components/ui/Card";
import { Trees, CheckCircle, Droplet } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Trees size={40} className="text-honey-yellow" />,
      title: "100% Madu Hutan",
      description: "Diambil langsung dari hutan liar Kefamenanu, bukan peternakan."
    },
    {
      icon: <Droplet size={40} className="text-honey-yellow" />,
      title: "Murni Tanpa Campuran",
      description: "Tanpa gula tambahan, pengawet, atau pewarna. Kekayaan alam murni."
    },
    {
      icon: <CheckCircle size={40} className="text-honey-yellow" />,
      title: "Proses Higienis",
      description: "Disaring dan dikemas dengan standar kebersihan tinggi untuk menjaga kualitas."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-brown mb-4">
            Mengapa Oma Moy?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menjaga keaslian rasa dan khasiat madu hutan Nusantara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 border-none bg-cream-bg/30">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-forest-brown mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
