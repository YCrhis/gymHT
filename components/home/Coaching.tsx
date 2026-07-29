import Image from "next/image";
import { ArrowUpRight, Dumbbell, Flame, Users } from "lucide-react";
import UIButton from "../UI/UIButton";

const Coaching = () => {
  return (
    <section className="py-28 ">
      <div className="w-full mx-auto">

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">

          {/* Left */}
          <div className="relative min-h-162.5 rounded-3xl overflow-hidden">

            <Image
              src="/images/banner.webp"
              alt="Coach"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 " />

            <div className="absolute bottom-0 left-0 w-full p-8 backdrop-blur-md bg-second/60">

              <div className="flex items-center gap-2 text-main font-semibold mb-4">
                <Flame size={18} />
                <span>Guidance that drives results</span>
              </div>

              <h2 className="text-4xl font-black mb-3">
                Meet Your Coach - Mike
              </h2>

              <p className="text-zinc-300">
                Work with certified trainers who craft personalized
                programs to match your goals, pace and lifestyle.
              </p>

            </div>

          </div>

          {/* Right */}
          <div className="grid grid-rows-[auto_1fr] gap-6">

            {/* Top cards */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-[#171717] rounded-3xl p-8 border border-zinc-800">

                <Dumbbell
                  className="text-main mb-5"
                  size={32}
                />

                <h3 className="text-3xl font-bold mb-3">
                  Personal Training
                </h3>

                <p className="text-zinc-400 mb-8">
                  One-on-one coaching designed to maximize your results.
                </p>

                <UIButton className="w-full">
                  Book a Coach
                  <ArrowUpRight size={18} />
                </UIButton>

              </div>

              <div className="bg-[#171717] rounded-3xl p-8 border border-zinc-800">

                <Users
                  className="text-main mb-5"
                  size={32}
                />

                <h3 className="text-3xl font-bold mb-3">
                  Group Classes
                </h3>

                <p className="text-zinc-400 mb-8">
                  High-energy sessions that keep you motivated and accountable.
                </p>

                <UIButton className="w-full">
                  View Schedule
                  <ArrowUpRight size={18} />
                </UIButton>

              </div>

            </div>

            {/* Bottom image */}

            <div className="relative rounded-3xl overflow-hidden min-h-80">

              <Image
                src="/images/banner.webp"
                alt="Training"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Coaching;