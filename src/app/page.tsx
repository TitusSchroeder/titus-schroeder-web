import { PillNav } from "@/components/ui/PillNav";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CmsDemo } from "@/components/sections/CmsDemo";
import { Comparison } from "@/components/sections/Comparison";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg relative selection:bg-brand-blue selection:text-white">
      <PillNav />
      <Hero />
      <Features />
      <CmsDemo />
      <Comparison />
      <Pricing />
      <FAQ />
      <About />
      <Footer />
    </main>
  );
}
