import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-brown text-cream-bg py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/logo.png" 
                alt="Oma Moy Logo" 
                width={140} 
                height={50} 
                className="h-12 w-auto object-contain" // Adjusted size for footer
              />
            </Link>
            <p className="text-cream-bg/80 leading-relaxed">
              Madu hutan asli 100% dari Kefamenanu, NTT. Diambil langsung dari sarang lebah liar tanpa campuran.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-honey-yellow">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-honey-yellow transition-colors">Beranda</Link></li>
              <li><Link href="/tentang-madu" className="hover:text-honey-yellow transition-colors">Tentang Madu</Link></li>
              <li><Link href="/produk" className="hover:text-honey-yellow transition-colors">Beli Sekarang</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-honey-yellow">Hubungi Kami</h4>
            <p className="mb-2">Kefamenanu, NTT, Indonesia</p>
            <p className="mb-2">Graha Raya, Tangerang Selatan, Indonesia</p>
            <p className="mb-4">WhatsApp: +62 812-1181-9061</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-honey-yellow transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-honey-yellow transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-bg/20 mt-12 pt-8 text-center text-sm text-cream-bg/60">
          © {new Date().getFullYear()} Oma Moy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
