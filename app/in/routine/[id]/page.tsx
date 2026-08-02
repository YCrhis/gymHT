import RoutineExerciseList from "@/components/in/routune/RoutineExerciseList"
import RoutineHero from "@/components/in/routune/RoutineHero"
import RoutineProgress from "@/components/in/routune/RoutineProgress"

const Routine = () => {
  return (
    <div>
        <RoutineHero
  title="Push Day"
  image="/images/routines/push-day.jpg"
  rating={4.9}
  likes={1845}
  duration="45 min"
  difficulty="Beginner"
  exercises={8}
  description="Build strength and muscle with a complete push workout targeting your chest, shoulders, and triceps. Perfect for beginners looking to establish a solid training routine."
/>
<RoutineProgress
  completed={3}
  total={8}
  calories={245}
  minutesLeft={18}
/>
<RoutineExerciseList
  exercises={[
    {
      id: 1,
      title: "Push Ups",
      image: "/images/pushup.jpg",
      category: "Chest",
      equipment: "Bodyweight",
      difficulty: "Beginner",
      reps: "12 Reps",
      duration: "2 min",
    },
    {
      id: 2,
      title: "Bench Press",
      image: "/images/bench.jpg",
      category: "Chest",
      equipment: "Barbell",
      difficulty: "Intermediate",
      reps: "10 Reps",
      duration: "5 min",
    },
  ]}
/>
    </div>
  )
}

export default Routine