import { Handshake, Heart, MessageCircle, Sparkles } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaRing, FaWhatsapp } from 'react-icons/fa'

const Story = () => {
    return (
        <div id="our-story" className='md:pt-16 pt-0 pb-10 border-b border-[#e6d2a6]'>
            <div className='grid md:grid-cols-[3fr_5fr]'>
                <div className='px-5 flex flex-col relative'>
                    <div className='max-w-100 relative z-10 w-full mx-auto md:mt-14 mt-9'>
                        <div data-aos="fade-up" className=" w-full flex">
                            <img className="max-w-53 mx-auto max-h-6.25 w-full" src="/images/line.png" alt="" />
                        </div>
                        <h2 data-aos="fade-up" className='font-serif md:text-6xl text-4xl py-1 text-center text-gold'>
                            Our Story
                        </h2>
                        <div data-aos="fade-up" className="gold-divider md:mb-6 mb-3">
                            <span
                                className="text-gold text-lg"
                                style={{ color: "var(--gold)" }}
                            >
                                <Heart className='text-gold' />
                            </span>
                        </div>
                        <p data-aos="fade-right" className='text-center mt-4 text-[#102c33] text-sm md:text-base [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            Our story began when a shared Whatsapp community focused on growth and learning brought us into each other’s lives. What started as a simple connection soon became something neither of us expected.
                        </p>
                        <p data-aos="fade-right" className='text-center mt-4 text-[#102c33] text-sm md:text-base [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            Through shared conversations, mutual friends, and a growing connection, what began as casual chats soon became a friendship we both deeply valued. We discovered how much we enjoyed each other’s company, and before long, friendship blossomed into love.
                        </p>
                        <p data-aos="fade-right" className='text-center mt-4 text-[#102c33] text-sm md:text-base [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            The more we talked, the more we realized how naturally we fit into each other’s lives. From long conversations and shared laughter to unforgettable moments together, our friendship grew into a love built on trust, companionship, and genuine friendship. 
                        </p>
                        <p data-aos="fade-right" className='text-center mt-4 text-[#102c33] text-sm md:text-base [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            In January 2023, we began our journey as a couple and in January 2026, that journey led to a beautiful “Yes” and the promise of forever.
                        </p>
                        <p data-aos="fade-right" className='text-center mt-4 text-[#102c33] text-sm md:text-base [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            Today, we’re grateful for every conversation, every memory, and every step that brought us here. We can’t wait to celebrate this next chapter with the people we love most.
                        </p>

                        <h1 data-aos="fade-up" className="font-scripts text-golds text-center text-xl md:text-3xl mt-5 leading-none [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF] ">
                            Susan & Franklin
                        </h1>
                        <div data-aos="fade-up" className="gold-divider mb-6">
                            <span
                                className="text-gold text-lg [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]"
                                style={{ color: "var(--gold)" }}
                            >
                                <Heart className='text-gold [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]' />
                            </span>
                        </div>
                    </div>
                    {/* <Image
                        src="/images/flower-1.png"
                        alt=""
                        width={260}
                        height={260}
                        className="absolute -scale-x-100 -left-8 -bottom-10"
                    /> */}
                    <img src="/images/flower-1.png" alt="" 
                        className="absolute -scale-x-100 -left-30 max-h-150 -bottom-60 md:-bottom-100 z-5"
                    />
                </div>
                <div className='flex max-h-225 container_couple relative'>
                    <Image 
                        src="/images/couples.png"
                        alt="Story Image"
                        width={600} 
                        height={600}
                        className='w-full h-auto object-cover'
                    />
                    <div className="absolute left-0 right-0 top-0 md:-top-2 -bottom-2
                        bg-[linear-gradient(to_bottom,_#FFF8EF_0%,_rgba(255,248,239,0.95)_2%,_rgba(255,248,239,0.35)_10%,_rgba(255,248,239,0.15)_15%,_rgba(255,248,239,0.01)_25%,_transparent_30%)] 
                        md:bg-[linear-gradient(to_right,rgba(255,248,239,1)_0%,rgba(255,248,239,0.95)_3%,rgba(255,248,239,0.35)_15%,rgba(255,248,239,0.15)_32%,rgba(255,248,239,0.01)_42%,rgba(255,248,239,0)_55%)] pointer-events-none"></div>
                </div>
            </div>
            <div className='pt-6 px-6'>
                <h2 data-aos="fade-up" className='font-serif md:text-4xl text-3xl py-1 text-center text-gold'>
                    Our Journey
                </h2>
                <div data-aos="fade-up" className="gold-divider mb-6">
                    <span
                        className="text-gold text-lg"
                        style={{ color: "var(--gold)" }}
                    >
                        <Heart className='text-gold' />
                    </span>
                </div>
                <div data-aos="fade-up" className='grid md:grid-cols-5 max-w-250 gap-8 md:gap-5 md:pt-6 pt-0 w-full mx-auto relative'>
                    <div className='absolute hidden md:flex h-0.5 bg-gold max-w-200 mx-auto right-0 left-0 top-15.25 w-full'></div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <FaWhatsapp className='text-gold text-3xl' size={40} />
                        </div>
                        <div className='max-w-60 w-full mx-auto'>
                            <div className='text-center text-base pt-3 font-semibold'>
                                THE FIRST CONNECTION
                            </div>
                            <div className="text-sm text-center pt-1">
                                A shared WhatsApp community brought our paths together.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <Handshake className='text-gold text-3xl' size={40} />
                        </div>
                        <div className='max-w-60 w-full mx-auto'>
                            <div className='text-center text-base pt-3 font-semibold'>
                                GROWING FRIENDSHIP
                            </div>
                            <div className="text-sm text-center pt-1">
                                Conversations and shared moments built a lasting friendship.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <Heart className='text-gold text-3xl' size={40} />
                        </div>
                        <div className='max-w-60 w-full mx-auto'>
                            <div className='text-center text-base pt-3 font-semibold'>
                                CHOOSING EACH OTHER
                            </div>
                            <div className="text-sm text-center pt-1">
                                Friendship blossomed into love in January 2023.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <FaRing className='text-gold text-3xl' size={40} />
                        </div>
                        <div className='max-w-60 w-full mx-auto'>
                            <div className='text-center text-base pt-3 font-semibold'>
                                THE PROPOSAL
                            </div>
                            <div className="text-sm text-center pt-1">
                                A joyful “Yes” in January 2026.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <Sparkles className='text-gold text-3xl' size={40} />
                        </div>
                        <div className='max-w-60 w-full mx-auto'>
                            <div className='text-center text-base pt-3 font-semibold'>
                                FOREVER BEGINS
                            </div>
                            <div className="text-sm text-center pt-1">
                                The next chapter starts on 3 October 2026.
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="mx-auto mt-9 max-w-140 rounded-xl p-5 relative border border-gold">
                    <h3 className='text-center font-sans-wedding '>
                        Every conversation, every laugh, every memory led us here. 
                    </h3>
                    <h3 className='text-center font-sans-wedding'>
                        Thank you for being part of our story. 💙
                    </h3>
                    <Heart size={30} className='text-gold bg-[#FFF8EF] absolute -top-3.75 mx-auto left-0 right-0 ' />
                </div>
            </div>
        </div>
    )
}

export default Story