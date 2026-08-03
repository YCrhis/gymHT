"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { UploadCloud } from "lucide-react";

interface Exercise {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  image: string;
  video: string;
  duration: number;
  calories: number;
  active: boolean;
}

interface Props {
  mode: "create" | "edit";
  initialData?: Partial<Exercise>;
}

export default function ExerciseForm({
  mode,
  initialData,
}: Props) {
  const isEdit = mode === "edit";

  const [form, setForm] = useState<Exercise>({
    title: initialData?.title ?? "",
    description: initialData?.description ?? "",
    category: initialData?.category ?? "",
    difficulty: initialData?.difficulty ?? "",
    image: initialData?.image ?? "",
    video: initialData?.video ?? "",
    duration: initialData?.duration ?? 15,
    calories: initialData?.calories ?? 100,
    active: initialData?.active ?? true,
  });

  const updateField = <K extends keyof Exercise>(
    key: K,
    value: Exercise[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
      {/* FORM */}

      <div className="space-y-8">
        {/* HEADER */}

        <div>
          <p className="uppercase tracking-[4px] text-lime-400">
            {isEdit ? "Edit Exercise" : "Create Exercise"}
          </p>

          <h1 className="mt-3 text-4xl font-black text-white">
            {isEdit
              ? "Update Exercise"
              : "New Exercise"}
          </h1>

          <p className="mt-3 text-gray-400">
            Fill in the information below to make this
            exercise available to your users.
          </p>
        </div>

        {/* BASIC INFORMATION */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-[#181818] p-8"
        >
          <h2 className="text-2xl font-bold text-white">
            Basic Information
          </h2>

          <div className="mt-8 grid gap-6">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Exercise Title
              </label>

              <input
                value={form.title}
                onChange={(e) =>
                  updateField("title", e.target.value)
                }
                placeholder="Bench Press"
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-lime-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Description
              </label>

              <textarea
                rows={5}
                value={form.description}
                onChange={(e) =>
                  updateField(
                    "description",
                    e.target.value
                  )
                }
                placeholder="Describe the exercise..."
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-lime-400"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Category
                </label>

                <select
                  value={form.category}
                  onChange={(e) =>
                    updateField(
                      "category",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none"
                >
                  <option value="">Select</option>
                  <option>Chest</option>
                  <option>Back</option>
                  <option>Legs</option>
                  <option>Shoulders</option>
                  <option>Core</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Difficulty
                </label>

                <select
                  value={form.difficulty}
                  onChange={(e) =>
                    updateField(
                      "difficulty",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none"
                >
                  <option value="">Select</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </motion.section>

        {/* MEDIA */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          className="rounded-3xl border border-white/10 bg-[#181818] p-8"
        >
          <h2 className="text-2xl font-bold text-white">
            Media
          </h2>

          <div className="mt-8 grid gap-6">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Image URL
              </label>

              <input
                value={form.image}
                onChange={(e) =>
                  updateField("image", e.target.value)
                }
                placeholder="/images/exercises/bench.jpg"
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-lime-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Video URL
              </label>

              <input
                value={form.video}
                onChange={(e) =>
                  updateField("video", e.target.value)
                }
                placeholder="https://youtube.com/..."
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-lime-400"
              />
            </div>

            <div className="rounded-2xl border-2 border-dashed border-white/10 p-10 text-center">
              <UploadCloud
                size={40}
                className="mx-auto text-lime-400"
              />

              <p className="mt-4 text-gray-300">
                Drag & drop an image here
              </p>

              <button
                type="button"
                className="mt-6 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black"
              >
                Browse Image
              </button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* LIVE PREVIEW */}

      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="h-fit rounded-3xl border border-white/10 bg-[#181818] p-6 xl:sticky xl:top-6"
      >
        <h3 className="text-xl font-bold text-white">
          Live Preview
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl bg-[#111111]">
          {form.image ? (
            <Image
              src={form.image}
              alt={form.title}
              width={400}
              height={240}
              className="h-56 w-full object-cover"
            />
          ) : (
            <div className="flex h-56 items-center justify-center text-gray-500">
              No image selected
            </div>
          )}

          <div className="p-6">
            <h4 className="text-2xl font-bold text-white">
              {form.title || "Exercise title"}
            </h4>

            <p className="mt-3 line-clamp-3 text-gray-400">
              {form.description ||
                "The exercise description will appear here."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {form.category && (
                <span className="rounded-full bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
                  {form.category}
                </span>
              )}

              {form.difficulty && (
                <span className="rounded-full bg-[#242424] px-4 py-2 text-sm text-gray-300">
                  {form.difficulty}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
}