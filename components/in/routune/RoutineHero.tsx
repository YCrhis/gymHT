"use client";

import Image from "next/image";
import { Heart, Star, Clock3, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface RoutineHeroProps {
  title: string;
  description: string;
  image: string;

  rating: number;
  likes: number;

  duration: string;

  difficulty: string;

  exercises: number;
}

export default function RoutineHero({
  title,
  description,
  image,
  rating,
  likes,
  duration,
  difficulty,
  exercises,
}: RoutineHeroProps) {
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(likes);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setTotalLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <section className="relative h-[70vh] min-h-[550px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="w-full"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <span className="rounded-full bg-lime-400/20 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-lime-400">
                {difficulty}
              </span>

              <h1 className="mt-6 text-5xl font-black uppercase text-white md:text-7xl">
                {title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-300">

                <div className="flex items-center gap-2">
                  <Star
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />

                  <span>{rating}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />

                  <span>{duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Dumbbell size={18} />

                  <span>{exercises} Exercises</span>
                </div>

              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
                {description}
              </p>

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
                  hover:shadow-[0_0_25px_rgba(163,230,53,.35)]
                "
              >
                Start Routine
              </button>

            </div>

            <motion.button
              whileTap={{ scale: .9 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleLike}
              className="
                flex
                w-fit
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-6
                py-4
                backdrop-blur-md
              "
            >
              <Heart
                className={`${
                  liked
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }`}
              />

              <div>
                <p className="font-bold text-white">
                  {totalLikes.toLocaleString()}
                </p>

                <p className="text-sm text-gray-300">
                  Likes
                </p>
              </div>
            </motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}