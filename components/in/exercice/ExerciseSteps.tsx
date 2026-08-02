"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  image: string;
}

interface Props {
  steps: Step[];
}

export default function ExerciseSteps({
  steps,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-20 text-center">
        <p className="uppercase tracking-[4px] text-lime-400">
          Step by Step
        </p>

        <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
          How To Perform
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Follow each step carefully to maximize your results
          while reducing the risk of injury.
        </p>
      </div>

      <div className="space-y-16">
        {steps.map((step, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={step.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .5,
              }}
              className={`
                grid
                gap-10
                items-center
                lg:grid-cols-2
                ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* IMAGE */}

              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={700}
                  height={500}
                  className="h-[280px] w-full object-cover transition duration-500 hover:scale-105 md:h-[380px]"
                />
              </div>

              {/* CONTENT */}

              <div>
                <div className="mb-6 flex items-center gap-5">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-lime-400
                      text-2xl
                      font-black
                      text-black
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}