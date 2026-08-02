import DashboardHero from "@/components/in/home/DashboardHero"
import ExerciseFilters from "@/components/in/home/ExerciseFilters"
import ExerciseGrid from "@/components/in/home/ExerciseGrid";
import MuscleFilters from "@/components/in/home/MuscleFilters"

const exercises = [
  {
    id: 1,
    title: "Bench Press",
    muscle: "Chest",
    difficulty: "Intermediate",
    duration: "30 min",
    rating: 4.9,
    image: "/images/exercises/bench-press.webp",
  },
  {
    id: 2,
    title: "Pull Up",
    muscle: "Back",
    difficulty: "Advanced",
    duration: "20 min",
    rating: 4.8,
    image: "/images/exercises/pull-up.webp",
  },
  {
    id: 3,
    title: "Squat",
    muscle: "Legs",
    difficulty: "Beginner",
    duration: "40 min",
    rating: 5,
    image: "/images/exercises/squat.webp",
  },
  {
    id: 4,
    title: "Shoulder Press",
    muscle: "Shoulders",
    difficulty: "Intermediate",
    duration: "25 min",
    rating: 4.7,
    image: "/images/exercises/shoulder.webp",
  },
  {
    id: 5,
    title: "Deadlift",
    muscle: "Back",
    difficulty: "Advanced",
    duration: "45 min",
    rating: 5,
    image: "/images/exercises/deadlift.webp",
  },
  {
    id: 6,
    title: "Plank",
    muscle: "Core",
    difficulty: "Beginner",
    duration: "15 min",
    rating: 4.6,
    image: "/images/exercises/plank.webp",
  },
];

const HomeIn = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
       <div className="w-[90%] max-w-7xl mx-auto py-10">

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

          <ExerciseFilters />

          <ExerciseGrid exercises={exercises}/>

        </div>

      </div>

        {/* <DashboardHero/>
        <MuscleFilters/> */}
    </div>
  )
}

export default HomeIn