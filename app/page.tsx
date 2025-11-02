import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Logos/>
            <Features/>
            <FAQ/>
            <CTA/>
            <Footer/>
        </main>
    );
}