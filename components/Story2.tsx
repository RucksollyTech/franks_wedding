import Image from "next/image";

export default function Story() {
  return (
    <section id="our-story" className="relative bg-[#FFF8EF] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
          <div className="mx-auto my-5 h-px w-24 bg-[#c9963e] md:mx-0" />

          <p className="mx-auto max-w-sm leading-8 text-gray-700 md:mx-0">
            What started as friendship grew into a love story that led us here.
            We are excited to celebrate this special chapter with our family and friends.
          </p>

          <button className="mt-8 border border-[#c9963e] px-8 py-3 text-sm font-semibold text-[#8b6120]">
            READ OUR STORY
          </button>
        </div>

        <div className="relative mx-auto max-w-md">
          <Image
            src="/images/couple.jpg"
            alt="Couple"
            width={500}
            height={600}
            className="rounded-sm border-4 border-[#e6d2a6] shadow-xl"
          />

          <Image
            src="/images/flower-1.png"
            alt=""
            width={220}
            height={220}
            className="absolute -right-10 -top-12"
          />

          <Image
            src="/images/flower-2.png"
            alt=""
            width={180}
            height={180}
            className="absolute -bottom-12 -left-10"
          />
        </div>
      </div>
    </section>
  );
}