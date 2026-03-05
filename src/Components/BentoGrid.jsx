import React from "react";
import { ArrowUpRight } from "lucide-react";
import saffronGarden from "../assets/projects/saffron-garden.png";
import lumera from "../assets/projects/lumera.png";
import serenityShores from "../assets/projects/serenity-shores.png";
import auraEvents from "../assets/projects/aura-events.png";
import bento5 from "../assets/projects/bento-5.png";
import bento6 from "../assets/projects/bento-6.png";
import bento7 from "../assets/projects/bento-7.png";
import bento8 from "../assets/projects/bento-8.png";
import bento9 from "../assets/projects/bento-9.png";

const bentoItems = [
  { id: 1, title: "Saffron Garden", image: saffronGarden, link: "https://saffrongarden.vercel.app/", span: "col-span-1" },
  { id: 2, title: "Lumera", image: lumera, link: "https://lumera-ecommerce.vercel.app/", span: "col-span-1" },
  { id: 3, title: "Serenity Shores", image: serenityShores, link: "https://serenity-shores.vercel.app/", span: "col-span-1" },
  { id: 4, title: "Aura Events", image: auraEvents, link: "https://auraevents.vercel.app/", span: "col-span-1" },
  { id: 5, title: "Lumera Beauty", image: bento5, link: "https://lumera-ecommerce.vercel.app/", span: "col-span-1" },
  { id: 6, title: "Featured Products", image: bento6, link: "https://lumera-ecommerce.vercel.app/", span: "col-span-1" },
  { id: 7, title: "Ventures Destinations", image: bento7, link: "https://ventures-polu.vercel.app/", span: "col-span-1" },
  { id: 8, title: "Aura Services", image: bento8, link: "https://auraevents.vercel.app/", span: "col-span-1" },
  { id: 9, title: "Saffron Reserve", image: bento9, link: "https://saffrongarden.vercel.app/", span: "col-span-1" },
];

function BentoGrid() {
  return (
    <div
      id="bento"
      className="h-auto mt-24 md:mt-36 py-10 flex flex-col items-center"
    >
      <div className="container-x">
        {/* Section Title */}
        <div className="text-[32px] md:text-[40px] font-bold text-center relative">
          <h1 className="inline-block relative pb-2 text-neutral-900 dark:text-zinc-200">
            My Work
            <span className="rounded absolute left-0 bottom-0 w-full h-1 theme-gradient-bg"></span>
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="mt-10 md:mt-14">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {bentoItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.span} border theme-border rounded-xl overflow-hidden relative group transition-all duration-300 hover:scale-[0.98] hover:shadow-lg hover:shadow-[var(--color-primary)]/20 hover:border-[var(--color-primary)] block`}
              >
                <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white font-semibold text-lg">
                      {item.title}
                    </span>
                    <ArrowUpRight
                      className="text-white bg-white/20 p-2 rounded-full"
                      size={28}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;
