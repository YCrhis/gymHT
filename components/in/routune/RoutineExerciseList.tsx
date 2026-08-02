"use client";

import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export interface RoutineExercise {
  id: number;
  title: string;
  image: string;

  category: string;
  equipment: string;

  difficulty: string;

  reps: string;

  duration: string;
}

interface Props {
  exercises: RoutineExercise[];
}

export default function RoutineExerciseList({
  exercises,
}: Props) {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleExercise = (id: number) => {
    setCompleted((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="uppercase tracking-[4px] text-lime-400">
          Today's Workout
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          Exercise List
        </h2>

        <p className="mt-3 text-gray-400">
          Complete every exercise to finish today's
          routine.
        </p>
      </div>

      <div className="space-y-6">
        {exercises.map((exercise, index) => {
          const isCompleted = completed.includes(exercise.id);

          return (
            <motion.div
              key={exercise.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .08,
              }}
              viewport={{
                once: true,
              }}
            >
              <div
                className={`
                  group
                  rounded-3xl
                  border
                  p-5
                  transition-all
                  duration-300

                  ${
                    isCompleted
                      ? "border-lime-400 bg-lime-400/10"
                      : "border-white/10 bg-[#181818]"
                  }
                `}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">

                  {/* CHECK */}

                  <button
                    onClick={() =>
                      toggleExercise(exercise.id)
                    }
                    className={`
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      transition

                      ${
                        isCompleted
                          ? "border-lime-400 bg-lime-400 text-black"
                          : "border-gray-600"
                      }
                    `}
                  >
                    {isCompleted && (
                      <Check size={22} />
                    )}
                  </button>

                  {/* IMAGE */}

                  <Image
                    src={exercise.image}
                    alt={exercise.title}
                    width={110}
                    height={110}
                    className={`
                      h-28
                      w-full
                      rounded-2xl
                      object-cover
                      md:w-40

                      ${
                        isCompleted
                          ? "opacity-60"
                          : ""
                      }
                    `}
                  />

                  {/* CONTENT */}

                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold transition ${
                        isCompleted
                          ? "text-lime-400"
                          : "text-white"
                      }`}
                    >
                      {exercise.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {exercise.category} •{" "}
                      {exercise.equipment}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">

                      <span className="rounded-full bg-[#242424] px-4 py-2 text-sm text-gray-300">
                        {exercise.reps}
                      </span>

                      <span className="rounded-full bg-[#242424] px-4 py-2 text-sm text-gray-300">
                        {exercise.duration}
                      </span>

                      <span className="rounded-full bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
                        {exercise.difficulty}
                      </span>

                    </div>
                  </div>

                  {/* DETAIL */}

                  <button
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#222]
                      transition
                      group-hover:bg-lime-400
                      group-hover:text-black
                    "
                  >
                    <ChevronRight />
                  </button>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}