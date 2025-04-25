import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StrengthenSection from "@/components/StrengthenSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CoursesSection />
      <StrengthenSection />
      <Footer />
    </div>
  );
}
