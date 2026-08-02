"use client";

import { motion } from "framer-motion";
import { Clock3, Dumbbell, Flame } from "lucide-react";

interface RoutineProgressProps {
  completed: number;
  total: number;
  calories: number;
  minutesLeft: number;
}

export default function RoutineProgress({
  completed,
  total,
  calories,
  minutesLeft,
}: RoutineProgressProps) {
  const progress = (completed / total) * 100;

  const getMessage = () => {
    if (progress === 100)
      return "🎉 Amazing! You completed today's routine.";

    if (progress >= 75)
      return "🔥 You're almost done. Finish strong!";

    if (progress >= 50)
      return "💪 Halfway there. Keep pushing!";

    if (progress >= 25)
      return "👏 Great start. Stay consistent.";

    return "🚀 Ready to crush today's workout?";
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-[#181818] p-8"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="uppercase tracking-[4px] text-lime-400">
              Today's Progress
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              {completed} / {total} Exercises Completed
            </h2>

            <p className="mt-4 max-w-xl text-gray-400">
              {getMessage()}
            </p>
          </div>

          <div className="text-left lg:text-right">
            <p className="text-5xl font-black text-lime-400">
              {Math.round(progress)}%
            </p>

            <p className="mt-2 text-gray-500">
              Workout Completed
            </p>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-10 h-4 overflow-hidden rounded-full bg-[#2b2b2b]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 0.8,
            }}
            className="h-full rounded-full bg-lime-400"
          />
        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <StatCard
            icon={<Dumbbell size={20} />}
            value={`${completed}/${total}`}
            label="Completed"
          />

          <StatCard
            icon={<Clock3 size={20} />}
            value={`${minutesLeft} min`}
            label="Remaining"
          />

          <StatCard
            icon={<Flame size={20} />}
            value={`${calories}`}
            label="Calories"
          />
        </div>
      </motion.div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({
  icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#121212] p-5">
      <div className="mb-4 text-lime-400">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-1 text-gray-500">
        {label}
      </p>
    </div>
  );
}