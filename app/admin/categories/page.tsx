'use client'

import Link from "next/link";
import {
  Plus,
  Search,
  Dumbbell,
  HeartPulse,
  PersonStanding,
  Pencil,
  Trash2,
} from "lucide-react";
import CategoryModal from "@/components/modals/CategoryModal";

const categories = [
  {
    id: 1,
    name: "Chest",
    description: "Upper body pushing exercises",
    exercises: 24,
    active: true,
    icon: Dumbbell,
  },
  {
    id: 2,
    name: "Legs",
    description: "Lower body exercises",
    exercises: 18,
    active: true,
    icon: PersonStanding,
  },
  {
    id: 3,
    name: "Cardio",
    description: "Endurance and HIIT workouts",
    exercises: 31,
    active: false,
    icon: HeartPulse,
  },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-10">

        <CategoryModal open={false} mode="create" onClose={()=>{}}/>
      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="uppercase tracking-[4px] text-lime-400">
            Admin
          </p>

          <h1 className="mt-3 text-4xl font-black text-white">
            Categories
          </h1>

          <p className="mt-3 max-w-xl text-gray-400">
            Organize your exercises into categories.
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-lime-400
            px-6
            py-4
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          <Plus size={20} />
          New Category
        </button>
      </div>

      {/* Filters */}

      <div className="rounded-3xl border border-white/10 bg-[#181818] p-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              placeholder="Search category..."
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-[#111111]
                py-3
                pl-12
                pr-4
                text-white
                outline-none
                focus:border-lime-400
              "
            />
          </div>

          <select className="rounded-xl border border-white/10 bg-[#111111] px-5 py-3 text-white outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Grid */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-[#181818]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-lime-400/30
              "
            >
              <div className="flex justify-between">
                <div className="rounded-2xl bg-lime-400/10 p-4 text-lime-400">
                  <Icon size={28} />
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    category.active
                      ? "bg-lime-400/10 text-lime-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {category.active ? "Active" : "Inactive"}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                {category.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {category.description}
              </p>

              <div className="mt-6 rounded-xl bg-[#111111] p-4">
                <p className="text-sm text-gray-500">
                  Exercises
                </p>

                <p className="mt-1 text-3xl font-black text-white">
                  {category.exercises}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  className="
                    flex-1
                    rounded-xl
                    bg-[#242424]
                    py-3
                    text-gray-300
                    transition
                    hover:bg-lime-400
                    hover:text-black
                  "
                >
                  <Pencil className="mx-auto" size={18} />
                </button>

                <button
                  className="
                    flex-1
                    rounded-xl
                    bg-[#242424]
                    py-3
                    text-gray-300
                    transition
                    hover:bg-red-500
                    hover:text-white
                  "
                >
                  <Trash2 className="mx-auto" size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}