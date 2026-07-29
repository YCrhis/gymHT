"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Testimonial } from "@/types/testimonial";
import UICarousel from "../UI/UICarousel";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Johan Bale",
    age: 29,
    image: "/images/banner.webp",
    avatar: "/images/testimonials/avatar1.jpg",
    rating: 5,
    quote:
      "When I first joined, I felt completely out of shape and intimidated by the idea of stepping into a gym. The team here changed everything for me. From the very first session, the coaches designed a program tailored to my pace and goals. They didn't just push me to work harder—they taught me proper form, kept me accountable, and celebrated every milestone along the way.",
    facebook: "#",
    instagram: "#",
    video: "#",
  },

  {
    id: 2,
    name: "Sarah Smith",
    age: 25,
    image: "/images/banner.webp",
    avatar: "/images/testimonials/avatar2.jpg",
    rating: 5,
    quote:
      "I have never felt stronger. The trainers are amazing, and the atmosphere keeps me motivated every single day.",
    facebook: "#",
    instagram: "#",
  },

  {
    id: 3,
    name: "Michael Lee",
    age: 32,
    image: "/images/banner.webp",
    avatar: "/images/testimonials/avatar3.jpg",
    rating: 5,
    quote:
      "Joining this gym completely transformed my lifestyle. I actually enjoy training now.",
    facebook: "#",
    instagram: "#",
  },
];

// Header + quote animations
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

// Image animation
const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

// User animation
const userReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export default function TestimonialsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="py-28"
    >
      <div className="px-6">
        {/* Header */}

        <motion.span
          variants={fadeUp}
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-[4px] text-lime-400"
        >
          What Our Members Say
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mb-20 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl"
        >
          Real stories.
          <br />
          Real progress.
          <br />
          Real results.
        </motion.h2>

        <UICarousel
          autoPlay
          interval={6000}
          items={testimonials}
          renderItem={(item) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="grid gap-14 lg:grid-cols-2 lg:items-center"
            >
              {/* IMAGE */}

              <motion.div
                variants={imageReveal}
                initial="hidden"
                animate="visible"
                className="relative overflow-hidden rounded-3xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={700}
                  height={850}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* CONTENT */}

              <div>
                {/* Stars */}

                <motion.div className="mb-8 flex gap-1">
                  {Array.from({
                    length: item.rating,
                  }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.12,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Star
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: "easeOut",
                  }}
                  className="text-2xl italic leading-10 text-gray-300"
                >
                  "{item.quote}"
                </motion.p>

                {/* User */}

                <motion.div
                  variants={userReveal}
                  initial="hidden"
                  animate="visible"
                  className="mt-12 flex items-center gap-5"
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />

                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>

                    <p className="text-gray-500">{item.age} Years old</p>
                  </div>

                  <div className="ml-6 h-10 w-px bg-gray-700" />
                </motion.div>
              </div>
            </motion.div>
          )}
        />
      </div>
    </motion.section>
  );
}
