"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Invitation from "@/components/Invitation";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from 'aos';
export default function Home() {
  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
    <main className="bg-[#FFF8EF] text-[#102c33]">
      <Navbar />
      <Hero />
      <Story />
      <Invitation />
      <RSVP />
      <Footer />
    </main>
  );
}