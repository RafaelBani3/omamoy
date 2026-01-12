import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Benefits from "@/components/sections/Benefits";
import CallToAction from "@/components/sections/CallToAction";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <Layout 
      title="Madu Hutan Asli NTT" 
      description="Oma Moy menyediakan madu hutan asli 100% dari Kefamenanu, NTT. Murni, tanpa campuran, langsung dari alam."
      url="/"
    >
      <Hero />
      <AboutPreview />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}
