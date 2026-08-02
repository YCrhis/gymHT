"use client";

import Image from "next/image";
import {
  Clock3,
  Dumbbell,
  Flame,
  Play,
  Target,
} from "lucide-react";

import { motion } from "framer-motion";

interface ExerciseOverviewProps {
  image: string;

  title: string;

  description: string;

  duration: string;

  difficulty: string;

  calories: number;

  equipment: string;

  muscles: string[];
}

export default function ExerciseOverview({
  image,
  title,
  description,
  duration,
  difficulty,
  calories,
  equipment,
  muscles,
}: ExerciseOverviewProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <Image
            src={image}
            alt={title}
            width={900}
            height={700}
            className="h-[550px] w-full object-cover transition duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30" />

          <button
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-lime-400
              text-black
              transition
              hover:scale-110
            "
          >
            <Play className="ml-1 fill-black" />
          </button>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <span className="text-sm uppercase tracking-[4px] text-lime-400">
            About this exercise
          </span>

          <h2 className="mt-3 text-4xl font-black text-white">
            {title}
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            {description}
          </p>

          {/* Cards */}

          <div className="mt-10 grid grid-cols-2 gap-5">

            <InfoCard
              icon={<Clock3 size={20} />}
              title="Duration"
              value={duration}
            />

            <InfoCard
              icon={<Target size={20} />}
              title="Difficulty"
              value={difficulty}
            />

            <InfoCard
              icon={<Flame size={20} />}
              title="Calories"
              value={`${calories} kcal`}
            />

            <InfoCard
              icon={<Dumbbell size={20} />}
              title="Equipment"
              value={equipment}
            />

          </div>

          {/* Muscles */}

          <div className="mt-8">

            <p className="mb-4 font-semibold text-white">
              Target Muscles
            </p>

            <div className="flex flex-wrap gap-3">

              {muscles.map((muscle) => (
                <span
                  key={muscle}
                  className="
                    rounded-full
                    border
                    border-lime-400/30
                    bg-lime-400/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-lime-400
                  "
                >
                  {muscle}
                </span>
              ))}

            </div>

          </div>

          {/* Button */}

          <button
            className="
              mt-10
              rounded-xl
              bg-lime-400
              px-8
              py-4
              font-bold
              text-black
              transition
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(163,230,53,.35)]
            "
          >
            Start Workout
          </button>

        </motion.div>

      </div>

    </section>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({
  icon,
  title,
  value,
}: CardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#181818]
        p-5
        transition
        hover:border-lime-400/30
      "
    >
      <div className="mb-4 text-lime-400">
        {icon}
      </div>

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-1 font-bold text-white">
        {value}
      </p>
    </div>
  );
}