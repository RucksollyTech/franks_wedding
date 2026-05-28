import Image from "next/image";
import CountDown from "./CountDown";

export default function Hero() {
  return (
    <section id="home" className="relative border-b border-[#e6d2a6]">
        <div className="hero-section md:pb-25 pb-25 md:pt-32 w-full relative">
            <div className="relative h-[90vh] md:h-auto z-10 w-full flex flex-col items-center px-6 md:px-20">
                <div className="
                    max-w-262.5 relative z-10 
                    mx-auto mt-auto w-full 
                    text-white"
                >
                    <h1 data-aos="fade-down" className="font-scripts text-3xl text-center md:text-start md:text-7xl leading-none ">
                        <span className="text-[#e8c27a]">
                            Susan
                        </span> 
                        <br /> 
                        <span className="text-white md:pl-15">
                            & 
                        </span>
                        <br /> 
                        <span className="text-[#e8c27a]">
                            Franklin
                        </span>
                    </h1>
        
                    <div data-aos="fade-right" className="md:max-w-53.25 w-full">
                        <p className="mt-4 text-center md:text-[18px] text-sm md:pl-1 tracking-widest">03 OCTOBER 2026</p>
                        <img className="md:max-w-53 max-w-35 max-h-6.25 w-full mx-auto" src="/images/line.png" alt="" />
                    </div>
        
                    <p data-aos="fade-right" className="md:text-lg text-sm md:pl-1 pt-1 md:max-w-53.25 w-full text-center">
                        Two hearts. One journey.
                    </p>
                    <p data-aos="fade-right" className="md:text-lg text-sm md:pl-1 md:max-w-53.25 w-full text-center">
                        One beautiful beginning.
                    </p>
                    <div className="md:mt-6 mt-4 md:items-start md:justify-start justify-center items-center flex">
                        <CountDown />
                    </div>
                    <div className="md:mt-6 mt-4 flex gap-4 md:items-start md:justify-start justify-center items-center ">
                        <a href="#rsvp" className="bg-[#0C5568] md:px-8 px-4.5 py-2.5 md:py-3 md:text-sm text-xs font-semibold text-white">
                            RSVP
                        </a>
                        <a href="#invitation" className="border border-[#d4a64a] md:px-8 px-4.5 py-2.5 md:py-3 md:text-sm text-xs font-semibold text-white">
                            WEDDING DETAILS
                        </a>
                    </div>
                </div>
                <img 
                    className="
                        absolute rotate-35 
                        max-h-full
                        mt-auto
                        md:-left-30 -left-25
                        top-0 bottom-0" 
                    src="/images/flower-6.png" alt="" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
        </div>
    </section>
  );
}