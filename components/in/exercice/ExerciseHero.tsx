"use client";

import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ExerciseHeroProps {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  rating: number;
  reviews: number;
  likes: number;
}

export default function ExerciseHero({
  title,
  description,
  category,
  difficulty,
  rating,
  reviews,
  likes,
}: ExerciseHeroProps) {
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(likes);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setTotalLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pt-28 pb-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-400">
            {category}
          </span>

          <h1 className="mt-6 text-5xl font-black uppercase text-white md:text-7xl">
            {title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-gray-400">
            <span>{difficulty}</span>

            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={`${
                    index < Math.round(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}

              <span className="ml-2 font-semibold text-white">
                {rating}
              </span>

              <span>({reviews.toLocaleString()} Reviews)</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            {description}
          </p>
        </motion.div>

        {/* Like Button */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleLike}
          className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-[#181818] px-6 py-4 transition hover:border-lime-400"
        >
          <motion.div
            animate={{
              scale: liked ? [1, 1.35, 1] : 1,
            }}
            transition={{ duration: 0.35 }}
          >
            <Heart
              className={`transition ${
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
              }`}
            />
          </motion.div>

          <div className="text-left">
            <p className="font-bold text-white">
              {totalLikes.toLocaleString()}
            </p>

            <p className="text-sm text-gray-400">
              Likes
            </p>
          </div>
        </motion.button>

      </div>
    </section>
  );
}