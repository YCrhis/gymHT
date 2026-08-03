"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Dumbbell,
  Flame,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";

interface Props {
  calories: number;
  duration: string;
  exercises: number;
  difficulty: string;
  rating: number;
  muscles: string[];
  equipment: string[];
}

export default function RoutineSummary({
  calories,
  duration,
  exercises,
  difficulty,
  rating,
  muscles,
  equipment,
}: Props) {
  const stats = [
    {
      icon: <Flame size={22} />,
      label: "Calories",
      value: `${calories} kcal`,
    },
    {
      icon: <Clock3 size={22} />,
      label: "Duration",
      value: duration,
    },
    {
      icon: <Dumbbell size={22} />,
      label: "Exercises",
      value: exercises,
    },
    {
      icon: <TrendingUp size={22} />,
      label: "Difficulty",
      value: difficulty,
    },
    {
      icon: <Star size={22} />,
      label: "Rating",
      value: rating,
    },
    {
      icon: <Target size={22} />,
      label: "Focus",
      value: `${muscles.length} Muscles`,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="uppercase tracking-[4px] text-lime-400">
          Overview
        </p>

        <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Routine Summary
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Everything you need to know before completing this workout.
        </p>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-[#181818] p-6 transition hover:border-lime-400/30"
          >
            <div className="mb-5 text-lime-400">
              {stat.icon}
            </div>

            <p className="text-sm text-gray-500">
              {stat.label}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {stat.value}
            </h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#181818] p-8">
          <h3 className="text-2xl font-bold text-white">
            Target Muscles
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {muscles.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-lime-400"
              >
                {muscle}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#181818] p-8">
          <h3 className="text-2xl font-bold text-white">
            Equipment
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {equipment.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#242424] px-4 py-2 text-gray-300"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}