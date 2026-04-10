import dynamic from 'next/dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

const Experience = dynamic(() => import('@/components/Experience'), { loading: () => <div className="py-24 text-center">Loading section...</div> });
const Projects = dynamic(() => import('@/components/Projects'), { loading: () => <div className="py-24 text-center">Loading works...</div> });
const FigmaDesigns = dynamic(() => import('@/components/FigmaDesigns'), { loading: () => <div className="py-24 text-center">Loading designs...</div> });
const Education = dynamic(() => import('@/components/Education'), { loading: () => <div className="py-24 text-center">Loading credentials...</div> });
const Awards = dynamic(() => import('@/components/Awards'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <FigmaDesigns />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
