"use client";

import { useState } from "react";

const categories = [
  "All",
  "Chest",
  "Back",
  "Shoulders",
  "Arms",
  "Legs",
  "Core",
  "Cardio",
];

const difficulties = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

const equipment = [
  "All",
  "Bodyweight",
  "Dumbbell",
  "Barbell",
  "Machine",
  "Cable",
];

const ExerciseFilters = () => {
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [selectedEquipment, setSelectedEquipment] = useState("All");

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12">
      <div>
        <h2 className="text-3xl font-black text-white">
          Find Your Exercise
        </h2>

        <p className="mt-2 text-gray-400">
          Filter exercises based on muscle group, difficulty and equipment.
        </p>
      </div>

      {/* Muscle Group */}

      <div>
        <h3 className="mb-4 font-semibold text-lime-400">
          Muscle Group
        </h3>

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2 transition-all duration-300 ${
                category === item
                  ? "border-lime-400 bg-lime-400 text-black"
                  : "border-white/10 bg-[#1a1a1a] text-gray-300 hover:border-lime-400 hover:text-lime-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}

      <div>
        <h3 className="mb-4 font-semibold text-lime-400">
          Difficulty
        </h3>

        <div className="flex flex-wrap gap-3">
          {difficulties.map((item) => (
            <button
              key={item}
              onClick={() => setDifficulty(item)}
              className={`rounded-full border px-5 py-2 transition-all duration-300 ${
                difficulty === item
                  ? "border-lime-400 bg-lime-400 text-black"
                  : "border-white/10 bg-[#1a1a1a] text-gray-300 hover:border-lime-400 hover:text-lime-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment */}

      <div>
        <h3 className="mb-4 font-semibold text-lime-400">
          Equipment
        </h3>

        <div className="flex flex-wrap gap-3">
          {equipment.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedEquipment(item)}
              className={`rounded-full border px-5 py-2 transition-all duration-300 ${
                selectedEquipment === item
                  ? "border-lime-400 bg-lime-400 text-black"
                  : "border-white/10 bg-[#1a1a1a] text-gray-300 hover:border-lime-400 hover:text-lime-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Filters */}

      <div className="rounded-2xl border border-white/10 bg-[#181818] p-5">
        <p className="text-gray-300">
          <span className="font-semibold text-lime-400">
            Current Filters:
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black">
            {category}
          </span>

          <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black">
            {difficulty}
          </span>

          <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black">
            {selectedEquipment}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExerciseFilters;