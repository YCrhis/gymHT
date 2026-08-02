"use client";

import { useState } from "react";
import { Flame } from "lucide-react";

const muscleGroups = [
  "All",
  "Chest",
  "Back",
  "Shoulders",
  "Arms",
  "Legs",
  "Core",
  "Glutes",
  "Cardio",
  "Full Body",
];

const MuscleFilters = () => {
  const [selected, setSelected] = useState("All");

  return (
    <section className="pb-12">
      <div className="w-[90%] max-w-7xl mx-auto">

        <div className="flex items-center gap-2 mb-6">
          <Flame className="text-main" size={18} />

          <h2 className="text-2xl font-bold">
            Browse Exercises
          </h2>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">

          {muscleGroups.map((group) => (
            <button
              key={group}
              onClick={() => setSelected(group)}
              className={`whitespace-nowrap rounded-full px-6 py-3 font-medium transition-all duration-300
                ${
                  selected === group
                    ? "bg-main text-black"
                    : "bg-[#171717] border border-zinc-800 hover:border-main/40"
                }`}
            >
              {group}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MuscleFilters;