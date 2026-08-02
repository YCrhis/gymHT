import UIButton from "@/components/UI/UIButton";
import { ArrowUpRight, Flame, Dumbbell, Trophy } from "lucide-react";

const DashboardHero = () => {
  return (
    <section className="py-10">
      <div className="w-[90%] max-w-7xl mx-auto">

        <div className="rounded-3xl border border-zinc-800 bg-[#171717] p-8 lg:p-12">

          {/* Header */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>

              <div className="flex items-center gap-2 text-main font-semibold mb-4">
                <Flame size={18} />
                Keep Moving Forward
              </div>

              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                Good Evening 👋
              </h1>

              <p className="mt-4 max-w-2xl text-zinc-400 text-lg">
                Every workout counts. Stay consistent and you'll
                become stronger than yesterday.
              </p>

            </div>

            <UIButton>
              Continue Workout
              <ArrowUpRight size={18} />
            </UIButton>

          </div>

          {/* Stats */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 transition-all duration-300 hover:border-main/40 hover:-translate-y-1">

              <Dumbbell className="text-main mb-5" />

              <h2 className="text-5xl font-black">
                24
              </h2>

              <p className="mt-3 text-zinc-400">
                Completed Workouts
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 transition-all duration-300 hover:border-main/40 hover:-translate-y-1">

              <Flame className="text-main mb-5" />

              <h2 className="text-5xl font-black">
                5,420
              </h2>

              <p className="mt-3 text-zinc-400">
                Calories Burned
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 transition-all duration-300 hover:border-main/40 hover:-translate-y-1">

              <Trophy className="text-main mb-5" />

              <h2 className="text-5xl font-black">
                12
              </h2>

              <p className="mt-3 text-zinc-400">
                Day Streak
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardHero;