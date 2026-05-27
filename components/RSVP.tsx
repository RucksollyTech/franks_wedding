import { Heart } from "lucide-react";
import Image from "next/image";

export default function RSVP() {
  return (
    <section id="rsvp" className="relative overflow-hidden bg-[#FFF8EF] px-5 py-14">
      <Image
        src="/images/flower-3.png"
        alt=""
        width={700}
        height={700}
        className="absolute -left-45 -top-45 rotate-90"
      />

      <Image
        src="/images/flower-4.png"
        alt=""
        width={700}
        height={700}
        className="absolute top-0 -right-50 -rotate-50"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-7 text-center">
          <h2 className="font-serif text-xl md:text-5xl">
            Kindly Respond Before
          </h2>
          <p className='mt-3 text-lg tracking-widest text-gold'>
              SEPTEMBER 6TH, 2026
          </p>
          <div className="gold-divider mb-6">
              <span
                  className="text-gold text-lg"
                  style={{ color: "var(--gold)" }}
              >
                  <Heart className='text-gold' />
              </span>
          </div>
        </div>
        <form className="grid grid-cols-[5fr_2fr]">

        
          <div className="grid gap-6 rounded-lg-xl md:grid-cols-2 md:p-10">
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full border border-[#dcc79b] rounded-lg bg-transparent px-4 py-3 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">Attendance</label>

              <div className="mt-2 grid grid-cols-2 gap-5">
                
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#dcc79b] px-5 py-3">
                  <input
                    type="radio"
                    name="attendance"
                    value="accept"
                    className="peer hidden"
                  />

                  {/* Radio */}
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#dcc79b] transition-all peer-checked:border-[#C9A84C] peer-checked:bg-[#C9A84C]" />

                  <span className="text-sm">Joyfully Accepts</span>
                </label>

                
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#dcc79b] px-5 py-3">
                  <input
                    type="radio"
                    name="attendance"
                    value="decline"
                    className="peer hidden"
                  />

                  {/* Radio */}
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#dcc79b] transition-all peer-checked:border-[#C9A84C] peer-checked:bg-[#C9A84C]" />

                  <span className="text-sm">Regretfully Declines</span>
                </label>

              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Number of Guests</label>
              <select className="mt-2 w-full border border-[#dcc79b] rounded-lg bg-transparent px-4 py-3 outline-none">
                <option>Select number</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="mt-2 w-full border border-[#dcc79b] rounded-lg bg-transparent px-4 py-3 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Notes</label>
              <textarea
                placeholder="Add any notes here..."
                rows={4}
                className="mt-2 w-full resize-none max-h-20 border border-[#dcc79b] rounded-lg bg-transparent px-4 py-3 outline-none"
              />
            </div>

            
          </div>
          <div className="flex flex-col md:pb-10.75 md:pr-14">
            <div className="mt-auto">
              <button
                type="submit"
                className="rounded-lg w-full bg-[#004653] px-8 py-4 text-sm font-semibold text-white"
              >
                CONFIRM RSVP →
              </button>
              <div className="rounded-lg text-center mt-5 p-4 border-2 border-gold">
                Entry is strictly by invitation.
                Access card is required for admission.
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}