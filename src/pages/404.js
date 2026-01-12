import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";

export default function Custom404() {
  return (
    <Layout title="404 - Halaman Tidak Ditemukan">
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-6xl md:text-9xl font-serif font-bold text-honey-yellow mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-forest-brown mb-6">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 max-w-md mb-8">
          Mungkin Anda tersesat di dalam hutan. Jangan khawatir, mari kembali ke jalan yang benar.
        </p>
        <Button href="/" variant="primary">
          Kembali ke Beranda
        </Button>
      </section>
    </Layout>
  );
}
