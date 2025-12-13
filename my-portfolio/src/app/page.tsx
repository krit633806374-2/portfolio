import HeroMenu from '@/components/HeroMenu';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="bg-black">
      <HeroMenu />
      <HeroSection />
      
      {/* Placeholder sections for menu navigation */}
      <section data-section="home" className="w-full h-screen bg-gray-900 flex items-center justify-center border-b border-gray-700">
        <div className="text-white text-4xl font-bold">Home Section</div>
      </section>
      
      <section data-section="aboutme" className="w-full h-screen bg-black flex items-center justify-center border-b border-gray-700">
        <div className="text-white text-4xl font-bold">About Me Section</div>
      </section>
      
      <section data-section="stack&tools" className="w-full h-screen bg-gray-900 flex items-center justify-center border-b border-gray-700">
        <div className="text-white text-4xl font-bold">Stack & Tools Section</div>
      </section>
      
      <section data-section="experience" className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-white text-4xl font-bold">Experience Section</div>
      </section>
    </div>
  );
}
