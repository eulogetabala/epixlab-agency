import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoSection from "@/components/sections/VideoSection";


import Image from "next/image";

export default function Home() {
  return (
   
    <>
    <NavBar/>
    <div className="mt-24 md:mt-8 px-4 md:px-[9rem]">
    <HeroSection/>
    <ServiceSection/>
    <VideoSection/>
    <TestimonialsSection/>
    <TeamSection/>
    <NewsletterSection/>
    <FooterSection/>
    </div>
   
    </>
  );
}
