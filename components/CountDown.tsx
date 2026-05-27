"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-10-03T00:00:00").getTime();

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hrs: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((distance / (1000 * 60 * 60)) % 24),
        mins: Math.floor((distance / (1000 * 60)) % 60),
        secs: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hrs, label: "HRS" },
    { value: timeLeft.mins, label: "MINS" },
    { value: timeLeft.secs, label: "SECS" },
  ];

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {items.map((item,index) => (
        <div
          data-aos-delay={`${index * 100}`} data-aos="fade-up"
          key={item.label}
          className="w-[58px] h-[56px] md:w-[74px] md:h-[72px]
          rounded-md border border-[#C9A84C]/70 bg-black/25
          flex flex-col items-center justify-center
          shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-sm"
        >
          <span className="font-serif text-2xl md:text-3xl text-[#C9A84C] leading-none">
            {String(item.value).padStart(2, "0")}
          </span>

          <span className="mt-1 font-serif text-sm md:text-base text-white uppercase tracking-wide">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}