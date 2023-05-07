import HomePageButton from "../components/HomePageButton";
import cardio from "../assets/cardio.jpg";

const Cardio = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4">
        <h2 className="text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
          <span className="text-[var(--orange)]">FitZone</span> Cardio Training
          Program
        </h2>

        <div>
          <img
            className="object-cover m-auto"
            src={cardio}
            alt="woman training strength"
          />
        </div>
        <div className="text-white md:px-16">
          <p className="py-3">
            Cardio training, short for cardiovascular training, is any form of
            physical exercise that increases the heart rate and respiratory
            rate, thereby improving the efficiency of the cardiovascular system.
            This type of training is also commonly known as aerobic exercise, as
            it primarily relies on the aerobic energy system, which uses oxygen
            to produce energy.
          </p>
          <p className="py-3">
            Examples of cardio training include running, cycling, swimming,
            rowing, jumping rope, and brisk walking. The intensity and duration
            of the exercise can be adjusted based on individual fitness levels
            and goals.
          </p>
          <p className="py-3">
            Cardio training has numerous health benefits, including improving
            cardiovascular function, increasing lung capacity, reducing the risk
            of chronic diseases such as heart disease and diabetes, improving
            mental health, and aiding in weight loss or weight management. It is
            recommended that adults engage in at least 150 minutes of
            moderate-intensity aerobic exercise or 75 minutes of
            vigorous-intensity aerobic exercise per week for optimal health.
          </p>
          <p className="py-3">
            Below find the appropriate training program for you:
          </p>
        </div>
        <div className="text-white flex flex-col md:px-16 pb-8 md:flex-row justify-center items-baseline gap-8">
          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Beginner Cardio Training Program (3-4 Days Per Week)
            </h3>
            <p className="py-3">Day 1</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of brisk walking or jogging</li>
              <li>
                Workout: 20-30 minutes of moderate-intensity cardio (e.g.,
                walking, cycling, elliptical machine)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 2</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of brisk walking or jogging</li>
              <li>
                Workout: 20-30 minutes of moderate-intensity cardio (e.g.,
                dancing, swimming, rowing machine)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3</p>
            <ol className="ps-4 list-disc">
              <li>
                Rest day or active recovery day (e.g., gentle yoga, stretching,
                walking)
              </li>
            </ol>
            <p className="py-3">Day 4</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jumping rope or high knees</li>
              <li>
                Workout: 20-30 minutes of moderate-intensity cardio (e.g., stair
                climber, stationary bike)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5</p>
            <ol className="ps-4 list-disc">
              <li>
                Rest day or active recovery day (e.g., gentle yoga, stretching,
                walking)
              </li>
            </ol>
            <p className="py-3">Day 6</p>
            <ol className="ps-4 list-disc">
              <li>
                Warm-up: 5-10 minutes of jogging in place or jumping jacks
              </li>
              <li>
                Workout: 20-30 minutes of moderate-intensity cardio (e.g., brisk
                walking, elliptical machine)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 7</p>
            <ol className="ps-4 list-disc">
              <li>
                Rest day or active recovery day (e.g., gentle yoga, stretching,
                walking)
              </li>
            </ol>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Intermediate Cardio Training Program (3-4 Days Per Week)
            </h3>
            <p className="py-3">Day 1</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jogging or cycling</li>
              <li>
                Workout: 30-40 minutes of moderate-intensity cardio (e.g.,
                running, swimming, rowing machine)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 2</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jumping rope or high knees</li>
              <li>
                Workout: 30-40 minutes of moderate-intensity cardio (e.g.,
                dancing, stair climber)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3</p>
            <ol className="ps-4 list-disc">
              <li>
                Rest day or active recovery day (e.g., gentle yoga, stretching,
                walking)
              </li>
            </ol>
            <p className="py-3">Day 4</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jogging or cycling</li>
              <li>
                Workout: 30-40 minutes of moderate-intensity cardio (e.g.,
                elliptical machine, stationary bike)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jumping rope or high knees</li>
              <li>
                Workout: 30-40 minutes of moderate-intensity cardio (e.g.,
                hiking, rowing machine)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6</p>
            <ol className="ps-4 list-disc">
              <li>
                Rest day or active recovery day (e.g., gentle yoga, stretching,
                walking)
              </li>
            </ol>
            <p className="py-3">Day 7</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jogging or cycling</li>
              <li>
                Workout: 30-40 minutes of moderate-intensity cardio (e.g.,
                swimming, brisk walking)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Advanced Cardio Training Program (5-6 Days Per Week)
            </h3>
            <p className="py-3">Day 1</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of dynamic stretching or jogging</li>
              <li>
                Workout: 40-50 minutes of high-intensity cardio (e.g., HIIT,
                sprint intervals)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 2</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jumping rope or high knees</li>
              <li>
                Workout: 40-50 minutes of moderate to high-intensity cardio
                (e.g. machine, hill sprints) cycling, rowing
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 3</p>
            <ol className="ps-4 list-disc">
              <li>
                Rest day or active recovery day (e.g., gentle yoga, stretching,
                walking)
              </li>
            </ol>
            <p className="py-3">Day 4</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of dynamic stretching or jogging</li>
              <li>
                Workout: 40-50 minutes of high-intensity cardio (e.g.,
                plyometric exercises, hill sprints, swimming sprints)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 5</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of jumping jacks or high knees</li>
              <li>
                Workout: 40-50 minutes of moderate to high-intensity cardio
                (e.g., kettlebell swings, battle ropes, agility drills)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
            <p className="py-3">Day 6</p>
            <ol className="ps-4 list-disc">
              <li>
                Rest day or active recovery day (e.g., gentle yoga, stretching,
                walking)
              </li>
            </ol>
            <p className="py-3">Day 7</p>
            <ol className="ps-4 list-disc">
              <li>Warm-up: 5-10 minutes of dynamic stretching or jogging</li>
              <li>
                Workout: 40-50 minutes of moderate to high-intensity cardio
                (e.g., trail running, swimming, outdoor cycling)
              </li>
              <li>Cool-down: 5-10 minutes of stretching</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardio;
