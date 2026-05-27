import { Camera, Church, GlassWater, Heart, Music, Utensils } from "lucide-react";

const timeline = [
  {
    time: "1:00 PM",
    title: "Guest Arrival",
    icon: GlassWater,
  },
  {
    time: "1:30 PM",
    title: "Wedding Ceremony",
    icon: Church,
  },
  {
    time: "3:00 PM",
    title: "Photography Session",
    icon: Camera,
  },
  {
    time: "4:00 PM",
    title: "Reception Begins",
    icon: Utensils,
  },
  {
    time: "6:00 PM",
    title: "Cake Cutting & First Dance",
    icon: Heart,
  },
  {
    time: "8:00 PM",
    title: "Reception Ends",
    icon: Music,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-[#FFF8EF] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-4xl md:text-5xl">
          The Day’s Timeline
        </h2>

        <div className="mx-auto my-5 h-px w-24 bg-[#c9963e]" />

        <div className="mt-12 space-y-8">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c9963e] text-[#c9963e]">
                  <Icon size={22} />
                </div>

                <div className="h-16 w-px bg-[#c9963e]" />

                <div>
                  <p className="font-semibold text-[#c9963e]">{item.time}</p>
                  <p className="text-gray-700">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}