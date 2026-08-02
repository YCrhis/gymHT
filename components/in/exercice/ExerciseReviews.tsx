"use client";

import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
}

interface Props {
  reviews?: Review[];
}

const dummyReviews: Review[] = [
  {
    id: 1,
    name: "John Carter",
    avatar: "JC",
    rating: 5,
    date: "2 days ago",
    comment:
      "Excellent exercise for building upper-body strength. I noticed improvements after only two weeks.",
    likes: 18,
  },
  {
    id: 2,
    name: "Emily Stone",
    avatar: "ES",
    rating: 4,
    date: "5 days ago",
    comment:
      "Perfect for beginners. Make sure to keep your core engaged throughout the movement.",
    likes: 11,
  },
  {
    id: 3,
    name: "Daniel White",
    avatar: "DW",
    rating: 5,
    date: "1 week ago",
    comment:
      "Simple but incredibly effective. I include it in every chest workout.",
    likes: 29,
  },
];

export default function ExerciseReviews({
  reviews = dummyReviews,
}: Props) {
  const [rating, setRating] = useState(5);

  const average =
    reviews.reduce((acc, review) => acc + review.rating, 0) /
    reviews.length;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="text-center">

        <p className="uppercase tracking-[4px] text-lime-400">
          Community
        </p>

        <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Member Reviews
        </h2>

        <div className="mt-8">
          <h3 className="text-6xl font-black text-white">
            {average.toFixed(1)}
          </h3>

          <div className="mt-3 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={22}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="mt-3 text-gray-400">
            Based on {reviews.length} reviews
          </p>
        </div>

      </div>

      {/* Reviews */}

      <div className="mt-16 space-y-6">

        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl border border-white/10 bg-[#181818] p-6"
          >
            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
                {review.avatar}
              </div>

              <div className="flex-1">

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                  <div>

                    <h3 className="font-bold text-white">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {review.date}
                    </p>

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

                <p className="mt-5 leading-8 text-gray-400">
                  {review.comment}
                </p>

                <button className="mt-6 flex items-center gap-2 text-gray-400 transition hover:text-lime-400">
                  <Heart size={18} />

                  {review.likes} Likes
                </button>

              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* Form */}

      <div className="mt-20 rounded-3xl border border-white/10 bg-[#181818] p-8">

        <h3 className="text-2xl font-bold text-white">
          Share Your Experience
        </h3>

        <p className="mt-2 text-gray-400">
          Help other members by sharing your feedback.
        </p>

        <div className="mt-6 flex justify-center gap-2 md:justify-start">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setRating(index + 1)}
            >
              <Star
                size={28}
                className={
                  index < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-700"
                }
              />
            </button>
          ))}
        </div>

        <textarea
          rows={5}
          placeholder="Tell us about your experience..."
          className="mt-6 w-full rounded-2xl border border-white/10 bg-[#111111] p-5 text-white outline-none transition focus:border-lime-400"
        />

        <button className="mt-6 rounded-xl bg-lime-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_25px_rgba(163,230,53,.35)]">
          Submit Review
        </button>

      </div>

    </section>
  );
}