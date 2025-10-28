// src/pages/Home.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col justify-center">
        <Hero />
      </main>
      <Footer />
    </>
  );
}