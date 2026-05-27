import { Heart } from "lucide-react";
import Image from "next/image";

export default function Invitation() {
    return (
        <section id="invitation" className="relative grid md:grid-cols-[5fr_4fr] gap-5 px-6 py-7 border-b border-[#e6d2a6]">
            <div className="flex justify-end relative">
                <div>
                    <div className="block md:hidden px-6 bg-[#FFF8EF]/65 ">
                        <h2 data-aos="fade-up" className='font-serif text-3xl md:text-4xl py-1 text-center text-gold'>
                            The Invitation
                        </h2>
                        <div data-aos="fade-up" className="gold-divider mb-4">
                            <span
                                className="text-gold text-lg"
                                style={{ color: "var(--gold)" }}
                            >
                                <Heart className='text-gold' />
                            </span>
                        </div>
                    </div>
                    <img data-aos="flip-left" className="md:max-w-125" src="/images/try3.png" alt="" />
                </div>
                <div data-aos="fade-right" className="invitationHeader p-6 bg-[#FFF8EF]/65 ">
                    <h2 className='font-serif text-4xl py-1 text-center text-gold'>
                        The Invitation
                    </h2>
                    <div className="gold-divider mb-4">
                        <span
                            className="text-gold text-lg"
                            style={{ color: "var(--gold)" }}
                        >
                            <Heart className='text-gold' />
                        </span>
                    </div>
                    <div className="pb-5 text-center hidden md:block">
                        We joyfully invite you
                        <br /> to celebrate our special day
                    </div>
                    <div className="text-center hidden md:block">
                        <a className="border text-gold border-[#d4a64a] px-8 py-3 text-sm font-semibold "
                        href="#">
                            VIEW INVITATION
                        </a>
                    </div>
                </div>
            </div>
            <div id="timeline" className="pl-5">
                <img data-aos="fade-left" className="md:max-h-188" src="/images/alles.png" alt="" />
                <div data-aos="fade-up" className="text-center block md:hidden mt-4">
                    <a className="border text-gold border-[#d4a64a] px-8 py-3 text-sm font-semibold "
                    href="#">
                        VIEW INVITATION
                    </a>
                </div>
            </div>
        </section>
    );
}