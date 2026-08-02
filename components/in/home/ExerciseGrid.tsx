import Image from "next/image";
import { Clock3, Star } from "lucide-react";
import UIButton from "@/components/UI/UIButton";

interface Props {
    exercises: any[]
}

const ExerciseGrid = ({exercises}: Props) => {
  return (
    <section>

      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-4xl font-black">
            Exercises
          </h2>

          <p className="mt-2 text-zinc-400">
            {exercises.length} workouts available
          </p>

        </div>

        <select className="rounded-xl border border-zinc-800 bg-[#171717] px-5 py-3 outline-none">

          <option>Most Popular</option>
          <option>Newest</option>
          <option>Highest Rated</option>
          <option>Shortest</option>

        </select>

      </div>

      {/* Grid */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {exercises.map((exercise) => (

          <article
            key={exercise.id}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#171717] transition-all duration-300 hover:-translate-y-2 hover:border-main/40"
          >

            <div className="group relative h-64 overflow-hidden">

              <Image
                src={exercise.image}
                alt={exercise.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-6">

              <span className="text-main text-sm font-semibold">
                {exercise.muscle}
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                {exercise.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                <div className="flex items-center gap-1 text-sm text-zinc-400">
                  <Star
                    size={16}
                    className="fill-main text-main"
                  />
                  {exercise.rating}
                </div>

                <div className="flex items-center gap-1 text-sm text-zinc-400">
                  <Clock3 size={16} />
                  {exercise.duration}
                </div>

                <span className="rounded-full bg-[#111111] px-3 py-1 text-xs">
                  {exercise.difficulty}
                </span>

              </div>

              <UIButton className="mt-6 w-full justify-center">
                Start Workout
              </UIButton>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
};

export default ExerciseGrid;