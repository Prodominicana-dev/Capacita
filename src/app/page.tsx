import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StrengthenSection from "@/components/StrengthenSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CoursesSection />
      <StrengthenSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
