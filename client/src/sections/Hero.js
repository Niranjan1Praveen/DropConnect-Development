"use client";
import { AnimatedGradientTextDemo } from "@/components/ui/animatedGradientTextDemo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useMemo } from "react";
export default function Hero() {
  const heroStrong = useMemo(
    () => ["Volunteering", "Community Impact", "Social Good"],
    []
  );

  const [currentText, setCurrentText] = useState(heroStrong[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const currentIndex = heroStrong.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % heroStrong.length;
        setCurrentText(heroStrong[nextIndex]);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentText, heroStrong]);

  return (
    <section className="py-24 px-4 flex items-center justify-center overflow-x-clip">
      <div className="container relative">
        <div className="flex justify-center">
          <AnimatedGradientTextDemo
            title={"Trusted by 100+ NGOs and corporates"}
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-medium text-center mt-6 max-w-6xl mx-auto leading-[1.15]">
          Drive Real-World Impact Through Purposeful{" "}
          <strong
            className={`transition font-medium fade-up ${
              fade ? "fade-in" : "fade-out"
            }`}
          >
            {currentText}{" "}
          </strong>
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 max-w-6xl mx-auto">
          Our platform empowers students, NGOs, and corporates to collaborate on
          water resilience projects—combining verified volunteerism, CSR
          compliance, and community action in one unified ecosystem.
        </p>

        <form className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="border-none px-4 !bg-transparent md:flex-1 w-full"
          />
          <Button variant={"signup"}>Sign Up</Button>
        </form>
      </div>
    </section>
  );
}
