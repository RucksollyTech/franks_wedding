import Image from "next/image";
import CountDown from "./CountDown";

export default function Hero() {
  return (
    <section className="relative border-b border-[#e6d2a6]">
        <div className="hero-section pb-25 pt-32 w-full relative">
            <div className="relative z-10 w-full flex items-center px-6 md:px-20">
                <div className="max-w-[1050px] relative z-10 mx-auto w-full text-white">
                    <h1 className="font-scripts text-4xl md:text-7xl leading-none ">
                        <span className="text-[#e8c27a]">
                            Susan
                        </span> 
                        <br /> 
                        <span className="text-white pl-15">
                            & 
                        </span>
                        <br /> 
                        <span className="text-[#e8c27a]">
                            Franklin
                        </span>
                    </h1>
        
                    <div className="max-w-53.25 w-full">
                        <p className="mt-4 text-center text-[18px] pl-1 tracking-widest">03 OCTOBER 2026</p>
                        <img className="max-w-53 max-h-6.25 w-full" src="/images/line.png" alt="" />
                    </div>
        
                    <p className="text-lg pl-1 pt-1 max-w-53.25 w-full text-center">
                        Two hearts. One journey.
                    </p>
                    <p className="text-lg pl-1 max-w-53.25 w-full text-center">
                        One beautiful beginning.
                    </p>
                    <div className="mt-6">
                        <CountDown />
                    </div>
                    <div className="mt-6 flex gap-4">
                        <a className="bg-[#004653] px-8 py-3 text-sm font-semibold text-white">
                            RSVP
                        </a>
                        <a className="border border-[#d4a64a] px-8 py-3 text-sm font-semibold text-white">
                            WEDDING DETAILS
                        </a>
                    </div>
                </div>
                <img 
                    className="
                        absolute rotate-35 
                        max-h-[100%] 
                        -left-30
                        top-0 bottom-0" 
                    src="/images/flower-6.png" alt="" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
        </div>
        {/* <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            height={}
        /> */}
    </section>
  );
}