import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  ChevronRight,
} from "lucide-react";

const exercises = [
  {
    id: 1,
    title: "Push Ups",
    category: "Chest",
    difficulty: "Beginner",
    duration: "15 min",
    status: "Active",
    image: "/images/exercises/push-up.jpg",
  },
  {
    id: 2,
    title: "Bench Press",
    category: "Chest",
    difficulty: "Intermediate",
    duration: "20 min",
    status: "Active",
    image: "/images/exercises/bench-press.jpg",
  },
  {
    id: 3,
    title: "Squats",
    category: "Legs",
    difficulty: "Beginner",
    duration: "12 min",
    status: "Inactive",
    image: "/images/exercises/squat.jpg",
  },
];

const ExercisesPage = ()  =>{
  return (
    <div className="space-y-10">
      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="uppercase tracking-[4px] text-lime-400">
            Admin
          </p>

          <h1 className="mt-3 text-4xl font-black text-white">
            Exercises
          </h1>

          <p className="mt-3 max-w-xl text-gray-400">
            Manage all exercises available in your application.
          </p>
        </div>

        <Link
          href="/admin/exercises/create"
          className="flex items-center gap-3 rounded-2xl bg-lime-400 px-6 py-4 font-semibold text-black transition hover:scale-105"
        >
          <Plus size={20} />

          New Exercise
        </Link>
      </div>

      {/* Filters */}

      <div className="rounded-3xl border border-white/10 bg-[#181818] p-6">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              placeholder="Search exercise..."
              className="w-full rounded-xl border border-white/10 bg-[#111111] py-3 pl-12 pr-4 text-white outline-none transition focus:border-lime-400"
            />
          </div>

          <select className="rounded-xl border border-white/10 bg-[#111111] px-5 py-3 text-gray-300 outline-none">
            <option>Category</option>
            <option>Chest</option>
            <option>Back</option>
            <option>Legs</option>
          </select>

          <select className="rounded-xl border border-white/10 bg-[#111111] px-5 py-3 text-gray-300 outline-none">
            <option>Difficulty</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <select className="rounded-xl border border-white/10 bg-[#111111] px-5 py-3 text-gray-300 outline-none">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Cards */}

      <div className="space-y-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="group rounded-3xl border border-white/10 bg-[#181818] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <Image
                src={exercise.image}
                alt={exercise.title}
                width={180}
                height={120}
                className="h-40 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105 lg:h-28 lg:w-44"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">
                  {exercise.title}
                </h2>

                <p className="mt-2 text-gray-400">
                  {exercise.category}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#242424] px-4 py-2 text-sm text-gray-300">
                    {exercise.difficulty}
                  </span>

                  <span className="rounded-full bg-[#242424] px-4 py-2 text-sm text-gray-300">
                    {exercise.duration}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-sm ${
                      exercise.status === "Active"
                        ? "bg-lime-400/10 text-lime-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {exercise.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="rounded-xl bg-[#242424] p-4 text-gray-300 transition hover:bg-lime-400 hover:text-black">
                  <Pencil size={20} />
                </button>

                <button className="rounded-xl bg-[#242424] p-4 text-gray-300 transition hover:bg-red-500 hover:text-white">
                  <Trash2 size={20} />
                </button>

                <button className="rounded-xl bg-[#242424] p-4 text-gray-300 transition hover:bg-white hover:text-black">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExercisesPage