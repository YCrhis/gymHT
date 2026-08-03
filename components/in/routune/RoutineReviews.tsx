"use client";

import { motion } from "framer-motion";
import { Heart, Star, ThumbsUp } from "lucide-react";
import { useMemo, useState } from "react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  level: string;
  rating: number;
  completed: number;
  recommend: boolean;
  likes: number;
  comment: string;
}

interface Props {
  reviews?: Review[];
}

const dummyReviews: Review[] = [
  {
    id: 1,
    name: "John Carter",
    avatar: "JC",
    level: "Beginner",
    rating: 5,
    completed: 12,
    recommend: true,
    likes: 28,
    comment:
      "Fantastic routine! It helped me improve my upper body strength in just a few weeks.",
  },
  {
    id: 2,
    name: "Emily Stone",
    avatar: "ES",
    level: "Intermediate",
    rating: 4,
    completed: 7,
    recommend: true,
    likes: 15,
    comment:
      "Very balanced routine with a good variety of exercises. Great for chest and shoulders.",
  },
  {
    id: 3,
    name: "Michael Brown",
    avatar: "MB",
    level: "Advanced",
    rating: 5,
    completed: 20,
    recommend: true,
    likes: 41,
    comment:
      "Excellent routine. I use it every Monday as my push day workout.",
  },
];

export default function RoutineReviews({
  reviews = dummyReviews,
}: Props) {
  const average = useMemo(() => {
    return (
      reviews.reduce((acc, review) => acc + review.rating, 0) /
      reviews.length
    ).toFixed(1);
  }, [reviews]);

  const [rating, setRating] = useState(5);
  const [recommend, setRecommend] = useState(true);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* HEADER */}

      <div className="text-center">
        <p className="uppercase tracking-[4px] text-lime-400">
          Community
        </p>

        <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Routine Reviews
        </h2>

        <div className="mt-8">
          <p className="text-6xl font-black text-white">
            {average}
          </p>

          <div className="mt-3 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={22}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="mt-4 text-gray-400">
            Based on {reviews.length} community reviews
          </p>
        </div>
      </div>

      {/* REVIEWS */}

      <div className="mt-16 space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-[#181818] p-6 transition hover:border-lime-400/30"
          >
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 text-lg font-bold text-black">
                {review.avatar}
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {review.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#242424] px-3 py-1 text-xs text-gray-300">
                        {review.level}
                      </span>

                      <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                        {review.completed} Completed
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-700"
                        }
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-6 leading-8 text-gray-400">
                  {review.comment}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Heart size={18} />
                    {review.likes}
                  </div>

                  {review.recommend && (
                    <div className="flex items-center gap-2 text-lime-400">
                      <ThumbsUp size={18} />
                      Recommended
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* REVIEW FORM */}

      <div className="mt-20 rounded-3xl border border-white/10 bg-[#181818] p-8">
        <h3 className="text-3xl font-bold text-white">
          Share Your Experience
        </h3>

        <p className="mt-2 text-gray-400">
          Help the community by reviewing this routine.
        </p>

        {/* Stars */}

        <div className="mt-8">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            Overall Rating
          </p>

          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setRating(i + 1)}
              >
                <Star
                  size={32}
                  className={
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-700 transition hover:text-yellow-400"
                  }
                />
              </button>
            ))}
          </div>
        </div>


        {/* Recommend */}

        <div className="mt-8">
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
            Would you recommend it?
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setRecommend(true)}
              className={`rounded-xl px-6 py-3 transition ${
                recommend
                  ? "bg-lime-400 text-black"
                  : "bg-[#242424] text-white"
              }`}
            >
              Yes
            </button>

            <button
              onClick={() => setRecommend(false)}
              className={`rounded-xl px-6 py-3 transition ${
                !recommend
                  ? "bg-red-500 text-white"
                  : "bg-[#242424] text-white"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Comment */}

        <div className="mt-8">
          <label className="mb-2 block text-sm uppercase tracking-widest text-gray-500">
            Your Review
          </label>

          <textarea
            rows={6}
            placeholder="Tell us about your experience..."
            className="w-full rounded-2xl border border-white/10 bg-[#121212] p-5 text-white outline-none transition focus:border-lime-400"
          />
        </div>

        <button className="mt-8 rounded-xl bg-lime-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_25px_rgba(163,230,53,.35)]">
          Submit Review
        </button>
      </div>
    </section>
  );
}