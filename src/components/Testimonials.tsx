import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/catalog";
import { EditorialReveal } from "./MotionPrimitives";

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#F2EBE0]/75 border-y border-[#E2D6C5] py-20 sm:py-28 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <EditorialReveal>
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F] mb-3">
              Client Notes
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B281E] font-light">
              Worn &amp; Loved{" "}
              <span className="italic">Every Day</span>
            </h2>
          </EditorialReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <EditorialReveal key={item.id} delay={idx * 0.12}>
              <article className="h-full bg-[#FAF6EE] border border-[#E2D6C5] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-5xl leading-none text-[#C9B9A6] select-none">
                      &ldquo;
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-3.5 h-3.5 fill-[#A67C52] text-[#A67C52]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="font-serif text-xl sm:text-[22px] leading-[1.5] text-[#3B281E] font-normal">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E2D6C5]/70">
                  <p className="text-xs tracking-[0.18em] uppercase text-[#3B281E] font-medium">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#6E5A4F] mt-1 font-light">
                    {item.location} &nbsp;·&nbsp; {item.purchasedItem}
                  </p>
                </div>
              </article>
            </EditorialReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
