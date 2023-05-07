import HomePageButton from "../components/HomePageButton";
import burn from "../assets/burn.jpg";

const Fat = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4">
        <h2 className="text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
          <span className="text-[var(--orange)]">FitZone</span> Fat Burning
          Program
        </h2>

        <div>
          <img
            className="object-cover m-auto"
            src={burn}
            alt="woman training strength"
          />
        </div>
        <div className="text-white md:px-16">
          <p className="py-3">
            Fat burning training refers to a type of exercise or physical
            activity that aims to increase your body's metabolism and burn fat.
            The idea behind fat burning training is to use a combination of
            cardio and resistance training to maximize the number of calories
            you burn during and after the workout.
          </p>
          <p className="py-3">
            Cardio exercises, such as running, biking, or swimming, are great
            for increasing your heart rate and burning calories, which can help
            you lose weight and reduce body fat. Resistance training, such as
            weight lifting or bodyweight exercises, can help build lean muscle
            mass, which can increase your metabolism and help you burn more
            calories even when you're at rest.
          </p>
          <p className="py-3">
            Fat burning training can include a variety of different exercises
            and workout styles, including high-intensity interval training
            (HIIT), circuit training, or steady-state cardio. The key is to
            choose exercises and workouts that challenge you and keep your heart
            rate elevated for an extended period.
          </p>
          <p className="py-3">
            Below find the appropriate training program for you:
          </p>
        </div>
        <div className="text-white flex flex-col md:px-16 pb-8 md:flex-row justify-center items-baseline gap-8">
          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Beginner Fat Burn Training Program
            </h3>
            <p className="py-3">Day 1: Full-body circuit training</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jogging in place)
              </li>
              <li>
                Circuit (perform each exercise for 30 seconds, rest for 30
                seconds between exercises, repeat the circuit 2-3 times):
                <ol className="ps-4">
                  <li>- Bodyweight squats</li>
                  <li>- Push-ups (modified if needed)</li>
                  <li>- Walking lunges</li>
                  <li>- Plank</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 2: Cardio</p>
            <ol className="ps-4 list-disc">
              <li>
                20-30 minutes of steady-state cardio (e.g. brisk walking,
                cycling, or swimming)
              </li>
            </ol>
            <p className="py-3">Day 3: Rest</p>
            <p className="py-3">
              Day 4: HIIT (high-intensity interval training)
            </p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Intervals (perform each exercise for 30 seconds, rest for 30
                seconds between exercises, repeat the circuit 2-3 times):
                <ol className="ps-4">
                  <li>- Burpees</li>
                  <li>- Mountain climbers</li>
                  <li>- Jump squats</li>
                  <li>- High knees</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5: Full-body resistance training</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Resistance exercises (perform 2-3 sets of 10-15 reps for each
                exercise):
                <ol className="ps-4">
                  <li>- Bodyweight squats</li>
                  <li>- Push-ups (modified if needed)</li>
                  <li>- Dumbbell rows (if access to weights)</li>
                  <li>- Plank</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6: Rest</p>
            <p className="py-3">Day 7: Cardio</p>
            <ol className="ps-4 list-disc">
              <li>
                20-30 minutes of steady-state cardio (e.g. brisk walking,
                cycling, or swimming)
              </li>
            </ol>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Intermediate Fat Burn Training Program
            </h3>
            <p className="py-3">Day 1: Full-body resistance training</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Resistance exercises (perform 3-4 sets of 8-12 reps for each
                exercise):
                <ol className="ps-4">
                  <li>- Barbell squats (if access to weights)</li>
                  <li>- Push-ups</li>
                  <li>- Pull-ups or lat pull-downs (if access to weights)</li>
                  <li>- Plank</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">
              Day 2: HIIT (high-intensity interval training)
            </p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Intervals (perform each exercise for 40 seconds, rest for 20
                seconds between exercises, repeat the circuit 3-4 times):
                <ol className="ps-4">
                  <li>- Jump squats</li>
                  <li>- Box jumps (if access to equipment)</li>
                  <li>- Kettlebell swings (if access to weights)</li>
                  <li>- Burpees</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3: Rest</p>
            <p className="py-3">Day 4: Upper body resistance training</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Resistance exercises (perform 3-4 sets of 8-12 reps for each
                exercise):
                <ol className="ps-4">
                  <li>- Bench press (if access to weights)</li>
                  <li>
                    - Standing dumbbell shoulder press (if access to weights)
                  </li>
                  <li>- Dumbbell bicep curls (if access to weights)</li>
                  <li>- Tricep dips (modified if needed)</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5: Cardio and core</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Cardio (choose one or a combination of the following: running,
                cycling, rowing, or elliptical machine) for 20-30 minutes
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6: Rest</p>
            <p className="py-3">
              Day 7: Cardio and lower body resistance training
            </p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Intervals (perform each exercise for 40 seconds, rest for 20
                seconds between exercises, repeat the circuit 3-4 times):
                <ol className="ps-4">
                  <li>- Jump squats</li>
                  <li>- Box jumps (if access to equipment)</li>
                  <li>- Kettlebell swings (if access to weights)</li>
                  <li>- Burpees</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Advanced Fat Burn Training Program
            </h3>
            <p className="py-3">Day 1: Full-body resistance training</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Resistance exercises (perform 4-5 sets of 6-10 reps for each
                exercise):
                <ol className="ps-4">
                  <li>- Pull-ups or chin-ups</li>
                  <li>- Dumbbell bench press</li>
                  <li>- Deadlifts</li>
                  <li>- Barbell rows</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 2: HIIT and core</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Intervals (perform each exercise for 45 seconds, rest for 15
                seconds between exercises, repeat the circuit 4-5 times):
                <ol className="ps-4">
                  <li>- Battle ropes</li>
                  <li>- Sled push (if access to equipment)</li>
                  <li>- Box jumps</li>
                  <li>- Kettlebell swings</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3: Rest</p>
            <p className="py-3">Day 4: Upper body resistance training</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Resistance exercises (perform 4-5 sets of 6-10 reps for each
                exercise):
                <ol className="ps-4">
                  <li>- Barbell bench press</li>
                  <li>- Seated dumbbell shoulder press</li>
                  <li>- Pull-ups or chin-ups (weighted if possible)</li>
                  <li>- Skull crushers</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">
              Day 5: Cardio and lower body resistance training
            </p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Lower body resistance exercises (perform 4-5 sets of 6-10 reps
                for each exercise):
                <ol className="ps-4">
                  <li>- Barbell squats (front or back)</li>
                  <li>- Romanian deadlifts</li>
                  <li>- Bulgarian split squats</li>
                  <li>- Leg curls (if access to equipment)</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6: Rest</p>
            <p className="py-3">Day 7: HIIT and core</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of light cardio (e.g. jumping jacks)
              </li>
              <li>
                Intervals (perform each exercise for 45 seconds, rest for 15
                seconds between exercises, repeat the circuit 4-5 times):
                <ol className="ps-4">
                  <li>- Burpees</li>
                  <li>- Box jumps</li>
                  <li>- Kettlebell swings</li>
                  <li>- Battle ropes</li>
                </ol>
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fat;
