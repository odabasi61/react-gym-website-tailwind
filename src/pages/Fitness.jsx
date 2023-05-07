import HomePageButton from "../components/HomePageButton";
import fitness from "../assets/fitness.jpg";

const Fitness = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4">
        <h2 className="text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
          <span className="text-[var(--orange)]">FitZone</span> Fitness Training
          Program
        </h2>

        <div>
          <img
            className="object-cover m-auto"
            src={fitness}
            alt="woman training strength"
          />
        </div>
        <div className="text-white md:px-16">
          <p className="py-3">
            Fitness training is a structured physical activity that aims to
            improve one's physical fitness and overall health. It typically
            involves exercises that are designed to target specific muscle
            groups, increase cardiovascular endurance, and improve flexibility
            and mobility.
          </p>
          <p className="py-3">
            Fitness training can take many forms, including weightlifting,
            resistance training, cardio exercises, plyometrics, and
            high-intensity interval training (HIIT). The type of training chosen
            will depend on the individual's fitness goals, current level of
            fitness, and personal preferences.
          </p>
          <p className="py-3">
            Fitness training can be done at home, at a gym, or outdoors, and can
            be performed with or without equipment. It is important to have a
            properly designed fitness program that includes a variety of
            exercises to prevent injury, improve overall fitness, and achieve
            the desired results.
          </p>
          <p className="py-3">
            Below find the appropriate training program for you:
          </p>
        </div>
        <div className="text-white flex flex-col md:px-16 md:flex-row justify-center items-baseline pb-8 gap-8">
          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Beginner Fitness Training Program
            </h3>
            <p className="py-3">Day 1: Full-body strength training</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Squats (3 sets of 10 reps)</li>
              <li>Lunges (3 sets of 10 reps)</li>
              <li>Push-ups (3 sets of 10 reps)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 2: Cardiovascular exercise</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Brisk walking or jogging (30 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3: Rest</p>
            <p className="py-3">Day 4: Full-body strength training</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Deadlifts (3 sets of 10 reps)</li>
              <li>Bicycle crunches (3 sets of 30-second holds)</li>
              <li>Tricep extensions (3 sets of 10 reps)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5: Cardiovascular exercise</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Cycling or swimming (30 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6: Rest</p>
            <p className="py-3">Day 7: Cardiovascular exercise</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Yoga or Pilates class or video (30-60 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Intermediate Fitness Training Program
            </h3>
            <p className="py-3">Day 1: Full-body strength training</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Bench press (4 sets of 8-10 reps)</li>
              <li>Bent-over rows (4 sets of 8-10 reps)</li>
              <li>Shoulder press (4 sets of 8-10 reps)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">
              Day 2: High-intensity interval training (HIIT)
            </p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Sprints or cycling intervals (20 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3: Rest</p>
            <p className="py-3">Day 4: Lower body strength training</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Squats (4 sets of 8-10 reps)</li>
              <li>Lunges (4 sets of 8-10 reps)</li>
              <li>Calf raises (4 sets of 8-10 reps)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5: Cardiovascular exercise</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Running, swimming, or cycling (45-60 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6: Rest</p>
            <p className="py-3">Day 7: Cardiovascular exercise</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Yoga or Pilates class or video (30-60 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Advanced Fitness Training Program
            </h3>
            <p className="py-3">Day 1: Chest and back strength training</p>
            <ol className="ps-4 list-decimal">
              <li>Incline dumbbell press (4 sets of 8-10 reps)</li>
              <li>Pull-ups (4 sets of as many reps as possible)</li>
              <li>Barbell rows (4 sets of 8-10 reps)</li>
              <li>T-bar rows (3 sets of 8-10 reps)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">
              Day 2: High-intensity interval training (HIIT)
            </p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Box jumps, burpees, or battle ropes (20-30 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3: Rest</p>
            <p className="py-3">Day 4: Leg strength training</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Squats (5 sets of 6-8 reps)</li>
              <li>Leg press (4 sets of 8-10 reps)</li>
              <li>Leg curls (4 sets of 8-10 reps)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5: Cardiovascular exercise</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Running, swimming, or cycling (60 minutes or more)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6: Rest</p>
            <p className="py-3">Day 7: Yoga or Pilates</p>
            <ol className="ps-4 list-decimal">
              <li>Warm-up: 5-10 minutes of light cardio</li>
              <li>Yoga or Pilates class or video (30-60 minutes)</li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
