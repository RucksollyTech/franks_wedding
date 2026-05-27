import { Handshake, Heart, MessageCircle, Sparkles } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaRing, FaWhatsapp } from 'react-icons/fa'

const Story = () => {
    return (
        <div className='pt-16 pb-10 border-b border-[#e6d2a6]'>
            <div className='grid grid-cols-[3fr_5fr]'>
                <div className='px-5 flex flex-col relative'>
                    <div className='max-w-[400px] relative z-10 w-full mx-auto mt-14'>
                        <div className=" w-full flex">
                            <img className="max-w-53 mx-auto max-h-6.25 w-full" src="/images/line.png" alt="" />
                        </div>
                        <h2 className='font-serif text-6xl py-1 text-center text-gold'>
                            Our Story
                        </h2>
                        <div className="gold-divider mb-6">
                            <span
                                className="text-gold text-lg"
                                style={{ color: "var(--gold)" }}
                            >
                                <Heart className='text-gold' />
                            </span>
                        </div>
                        <p className='text-center mt-4 text-[#102c33] [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            Our story began when a shared Whatsapp community focused on growth and learning brought us into each other’s lives. What started as a simple connection soon became something neither of us expected.
                        </p>
                        <p className='text-center mt-4 text-[#102c33] [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            Through shared conversations, mutual friends, and a growing connection, what began as casual chats soon became a friendship we both deeply valued. We discovered how much we enjoyed each other’s company, and before long, friendship blossomed into love.
                        </p>
                        <p className='text-center mt-4 text-[#102c33] [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            The more we talked, the more we realized how naturally we fit into each other’s lives. From long conversations and shared laughter to unforgettable moments together, our friendship grew into a love built on trust, companionship, and genuine friendship. 
                        </p>
                        <p className='text-center mt-4 text-[#102c33] [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            In January 2023, we began our journey as a couple and in January 2026, that journey led to a beautiful “Yes” and the promise of forever.
                        </p>
                        <p className='text-center mt-4 text-[#102c33] [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
                            Today, we’re grateful for every conversation, every memory, and every step that brought us here. We can’t wait to celebrate this next chapter with the people we love most.
                        </p>

                        <h1 className="font-scripts text-golds text-center text-xl md:text-3xl mt-5 leading-none [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF] ">
                            Susan & Franklin
                        </h1>
                        <div className="gold-divider mb-6">
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
                        className="absolute -scale-x-100 -left-8 -bottom-100 z-5"
                    />
                </div>
                <div className='flex max-h-[900px] container_couple relative'>
                    <Image 
                        src="/images/couples.png"
                        alt="Story Image"
                        width={500} 
                        height={500}
                        className='w-full h-auto object-cover'
                    />
                    <div className="absolute left-0 right-0 -top-2 -bottom-2 bg-[linear-gradient(to_right,rgba(255,248,239,1)_0%,rgba(255,248,239,0.95)_3%,rgba(255,248,239,0.35)_15%,rgba(255,248,239,0.15)_32%,rgba(255,248,239,0.01)_42%,rgba(255,248,239,0)_55%)] pointer-events-none"></div>
                </div>
            </div>
            <div className='pt-6'>
                <h2 className='font-serif text-4xl py-1 text-center text-gold'>
                    Our Journey
                </h2>
                <div className="gold-divider mb-6">
                    <span
                        className="text-gold text-lg"
                        style={{ color: "var(--gold)" }}
                    >
                        <Heart className='text-gold' />
                    </span>
                </div>
                <div className='grid grid-cols-5 max-w-250 gap-5 pt-6 w-full mx-auto relative'>
                    <div className='absolute h-0.5 bg-gold max-w-200 mx-auto right-0 left-0 top-15.25 w-full'></div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <FaWhatsapp className='text-gold text-3xl' size={40} />
                        </div>
                        <div>
                            <div className='text-center text-base pt-3 font-semibold'>
                                THE FIRST CONNECTION
                            </div>
                            <div className="text-sm text-center pt-1">
                                A conversation through a Whatsapp community introduced us to each other and sparked a friendship neither of us expected.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <Handshake className='text-gold text-3xl' size={40} />
                        </div>
                        <div>
                            <div className='text-center text-base pt-3 font-semibold'>
                                GROWING FRIENDSHIP
                            </div>
                            <div className="text-sm text-center pt-1">
                                Through endless conversations, mutual friends, and time spent together, we built a friendship that quickly became one of the most important parts of our lives.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <Heart className='text-gold text-3xl' size={40} />
                        </div>
                        <div>
                            <div className='text-center text-base pt-3 font-semibold'>
                                CHOOSING EACH OTHER
                            </div>
                            <div className="text-sm text-center pt-1">
                                What started as friendship naturally blossomed into love, and in January 2023, we began our journey together as a couple.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <FaRing className='text-gold text-3xl' size={40} />
                        </div>
                        <div>
                            <div className='text-center text-base pt-3 font-semibold'>
                                THE PROPOSAL
                            </div>
                            <div className="text-sm text-center pt-1">
                                In January 2026, one beautiful question and one joyful “Yes” turned our love story into a forever story.
                            </div>
                        </div>
                    </div>
                    <div className='relative z-5'>
                        <div className='bg-[#FFF8EF] w-19 h-19 rounded-full flex mx-auto items-center justify-center border border-gold'>
                            <Sparkles className='text-gold text-3xl' size={40} />
                        </div>
                        <div>
                            <div className='text-center text-base pt-3 font-semibold'>
                                FOREVER BEGINS
                            </div>
                            <div className="text-sm text-center pt-1">
                                Now we’re counting down the days until we celebrate the beginning of our next chapter as husband and wife.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-9 max-w-140 rounded-xl p-5 relative border border-gold">
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