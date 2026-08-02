import ExerciseHero from "@/components/in/exercice/ExerciseHero";
import ExerciseOverview from "@/components/in/exercice/ExerciseOverview";
import ExerciseReviews from "@/components/in/exercice/ExerciseReviews";
import ExerciseSteps from "@/components/in/exercice/ExerciseSteps";
import ExerciseWorkoutSession from "@/components/in/exercice/ExerciseWorkoutSession";
const ExerciceDetail = () => {
  return (
    <div>
      <ExerciseHero
        title="Push Ups"
        category="Chest"
        difficulty="Beginner"
        rating={4.9}
        reviews={2384}
        likes={3468}
        description="Push-ups are one of the most effective bodyweight exercises for building chest, shoulders and triceps while improving overall upper-body strength and stability."
      />
      <ExerciseOverview
        title="Push Ups"
        image="/images/exercises/pushups.jpg"
        description="Push-ups are one of the most effective compound bodyweight exercises. They primarily target the chest, shoulders, and triceps while engaging the core to improve overall upper-body strength and stability."
        duration="15 min"
        difficulty="Beginner"
        calories={120}
        equipment="Bodyweight"
        muscles={["Chest", "Triceps", "Shoulders", "Core"]}
      />
     
      <ExerciseSteps
        steps={[
          {
            title: "Starting Position",
            description:
              "Place your hands slightly wider than shoulder-width apart while keeping your body in a straight line from head to heels.",
            image: "/images/exercises/step1.jpg",
          },
          {
            title: "Lower Yourself",
            description:
              "Bend your elbows slowly and lower your chest until it is just above the floor.",
            image: "/images/exercises/step2.jpg",
          },
          {
            title: "Push Up",
            description:
              "Push through your palms until your arms are fully extended while maintaining control.",
            image: "/images/exercises/step3.jpg",
          },
          {
            title: "Lower Yourself",
            description:
              "Bend your elbows slowly and lower your chest until it is just above the floor.",
            image: "/images/exercises/step2.jpg",
          },
          {
            title: "Push Up",
            description:
              "Push through your palms until your arms are fully extended while maintaining control.",
            image: "/images/exercises/step3.jpg",
          },
        ]}
      />
       <ExerciseWorkoutSession initialSeconds={60} />
      <ExerciseReviews />
    </div>
  );
};

export default ExerciceDetail;
