import { Heart } from "lucide-react";
import Image from "next/image";

export default function Invitation() {
    return (
        <section className="relative grid grid-cols-[5fr_4fr] gap-5 px-6 py-7 border-b border-[#e6d2a6]">
            <div className="flex justify-end relative">
                <div>
                    <img className="max-w-125" src="/images/try3.png" alt="" />
                </div>
                <div className="absolute top-0 bottom-0 max-h-65 p-6 left-10 bg-[#FFF8EF]/65 my-auto">
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
                    <div className="pb-5 text-center">
                        We joyfully invite you
                        <br /> to celebrate our special day
                    </div>
                    <div className="text-center">
                        <a className="border text-gold border-[#d4a64a] px-8 py-3 text-sm font-semibold "
                        href="#">
                            VIEW INVITATION
                        </a>
                    </div>
                </div>
            </div>
            <div className="pl-5">
                <img className="max-h-188" src="/images/alles.png" alt="" />
            </div>
        </section>
    );
}