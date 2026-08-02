"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Dumbbell,
  Pause,
  Play,
  RotateCcw,
  Flame,
  Target,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface Props {
  initialSeconds?: number;
}

const tips = [
  "Keep your core engaged during the entire movement.",
  "Breathe out as you push and inhale on the way down.",
  "Maintain a straight line from head to heels.",
  "Don't rush the repetitions. Quality beats speed.",
  "Control both the lowering and lifting phases.",
];

const RADIUS = 160;
const STROKE = 10;
const NORMALIZED_RADIUS = RADIUS - STROKE;
const CIRCUMFERENCE = NORMALIZED_RADIUS * 2 * Math.PI;

export default function ExerciseWorkoutSession({
  initialSeconds = 60,
}: Props) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const progress = useMemo(() => {
    return seconds / initialSeconds;
  }, [seconds, initialSeconds]);

  const dashOffset =
    CIRCUMFERENCE - progress * CIRCUMFERENCE;

  const format = (value: number) => {
    const min = Math.floor(value / 60);
    const sec = value % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div
        className="
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-b
          from-[#1d1d1d]
          to-[#141414]
          p-8
          lg:p-12
        "
      >
        <div className="mb-12">
          <p className="uppercase tracking-[4px] text-lime-400">
            Workout Session
          </p>

          <h2 className="mt-3 text-4xl font-black text-white">
            Let's Train
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          {/* TIMER */}

          <div className="flex flex-col items-center justify-center">
            <motion.div
              animate={{
                scale: running ? [1, 1.02, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: running ? Infinity : 0,
              }}
              className="relative"
            >
              <svg
                width={330}
                height={330}
                className="-rotate-90"
              >
                <circle
                  cx={RADIUS}
                  cy={RADIUS}
                  r={NORMALIZED_RADIUS}
                  stroke="#2d2d2d"
                  strokeWidth={STROKE}
                  fill="transparent"
                />

                <motion.circle
                  cx={RADIUS}
                  cy={RADIUS}
                  r={NORMALIZED_RADIUS}
                  stroke="#A3E635"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  animate={{
                    strokeDashoffset: dashOffset,
                  }}
                  transition={{
                    duration: .4,
                  }}
                  fill="transparent"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Dumbbell
                  size={26}
                  className="mb-3 text-lime-400"
                />

                <motion.h3
                  key={seconds}
                  initial={{
                    scale: .85,
                    opacity: .4,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  className="text-6xl font-black text-white"
                >
                  {format(seconds)}
                </motion.h3>

                <span className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                  Remaining
                </span>
              </div>
            </motion.div>

            {/* STATS */}

            <div className="mt-10 grid w-full max-w-lg grid-cols-3 gap-4">
              <StatCard
                icon={<Flame size={18} />}
                value="120"
                label="Calories"
              />

              <StatCard
                icon={<Target size={18} />}
                value="Beginner"
                label="Level"
              />

              <StatCard
                icon={<Dumbbell size={18} />}
                value="Chest"
                label="Target"
              />
            </div>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setRunning(true)}
                className="rounded-xl bg-lime-400 px-7 py-3 font-semibold text-black transition hover:scale-105"
              >
                <Play className="mr-2 inline" size={18} />
                Start
              </button>

              <button
                onClick={() => setRunning(false)}
                className="rounded-xl border border-white/10 bg-[#232323] px-7 py-3 text-white transition hover:border-lime-400"
              >
                <Pause className="mr-2 inline" size={18} />
                Pause
              </button>

              <button
                onClick={() => {
                  setRunning(false);
                  setSeconds(initialSeconds);
                }}
                className="rounded-xl border border-white/10 bg-[#232323] px-7 py-3 text-white transition hover:border-lime-400"
              >
                <RotateCcw className="mr-2 inline" size={18} />
                Reset
              </button>
            </div>
          </div>

          {/* COACH */}

          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-lime-400/20 bg-lime-400/5 p-8">
              <p className="mb-8 uppercase tracking-[4px] text-lime-400">
                Coach Tips
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={tipIndex}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: .45,
                  }}
                >
                  <p className="text-2xl font-semibold leading-10 text-white">
                    💡 {tips[tipIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex justify-center gap-3">
                {tips.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      width: tipIndex === index ? 30 : 10,
                    }}
                    className={`h-2 rounded-full ${
                      tipIndex === index
                        ? "bg-lime-400"
                        : "bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 text-center">
      <div className="mb-3 flex justify-center text-lime-400">
        {icon}
      </div>

      <p className="font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {label}
      </p>
    </div>
  );
}