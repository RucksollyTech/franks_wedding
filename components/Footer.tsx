import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="bg-[#003f49]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div className="flex flex-col border-r border-gold">
            <h3 className="font-serif text-2xl text-gold font-semibold text-center">Dress Code</h3>
            <div className="mt-5 flex gap-3 mx-auto">
              <div className="flex flex-col gap-4 justify-center">
                <span className="h-10 w-10 rounded-full bg-[#e58b8b]" />
                <span className="text-sm text-[#D2D6D5] font-semibold">
                  Onion Pink
                </span>
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <span className="h-10 w-10 rounded-full border border-white bg-[#003f49]" />
                <span className="text-sm text-[#D2D6D5] font-semibold">
                  Teal Blue
                </span>
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <span className="h-10 w-10 rounded-full bg-[#d4a64a]" />
                <span className="text-sm text-[#D2D6D5] font-semibold">
                  Gold
                </span>
              </div>
            </div>
            <p className="text-sm text-[#D2D6D5] font-semibold text-center pt-5">
              We can't wait to celebrate 
              <br />with you.
            </p>
          </div>

          <div className="border-r border-gold">
            <h3 className="font-serif text-center text-2xl text-gold font-semibold">Venue & Access Card</h3>
            <MapPin className="mt-5 text-gold mx-auto" />
            <p className="mt-4 text-sm text-[#D2D6D5] font-semibold text-center">
              Kindly refer to your access <br />card for venue details.
            </p>
            <p className="mt-4 text-sm text-[#D2D6D5] pt-1 font-semibold text-center">
              Access card <br />is required.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-gold font-semibold text-center">Need Assistance?</h3>
            <div className="mt-5 space-y-3 mx-auto text-sm text-[#D2D6D5] font-semibold">
              <p className="flex gap-2 text-center">
                <Phone size={16} /> Richard Oguammor <br /> 08189544639
              </p>
              <p className="flex gap-2 text-center">
                <Phone size={16} /> Chika Ejiofor <br /> 0810 965 8805
              </p>
            </div>
          </div>

          
        </div>
      </div>

      <div className="border-t border-white/10 py-3 text-center">
        <div className="gold-divider mb-4">
            <span
                className="text-gold text-lg"
                style={{ color: "var(--gold)" }}
            >
                <img
                      className="w-10"
                  //     {/* Image
                  // width={24}
                  // height={24}  */}
                  src="/images/logo2.png" alt="Sf" />
            </span>
        </div>
        <p className="mt-2 text-xs text-foreground/75">
          © 2026 Susan & Franklin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}