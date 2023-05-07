import HomePageButton from "../components/HomePageButton";
import strength from "../assets/strength.jpg";

const Strength = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4">
        <h2 className="text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
          <span className="text-[var(--orange)]">FitZone</span> Strength
          Training Program
        </h2>
        <div>
          <img
            className="object-cover m-auto"
            src={strength}
            alt="woman training strength"
          />
        </div>
        <div className="text-white md:px-16">
          <p className="py-3">
            Strength training is a type of physical exercise that is focused on
            building and developing muscular strength and endurance. This type
            of training involves using resistance, such as weights, resistance
            bands, or bodyweight, to challenge the muscles and improve their
            strength and function.
          </p>
          <p className="py-3">
            Strength training can involve a variety of exercises and techniques,
            such as weightlifting, resistance band workouts, bodyweight
            exercises like push-ups or squats, and plyometric exercises that
            involve explosive movements. The goal of strength training is to
            increase muscle size, improve muscular endurance, and enhance
            overall physical performance.
          </p>
          <p className="py-3">
            Strength training has numerous health benefits, including increased
            muscle mass and strength, improved bone density, increased metabolic
            rate, improved body composition, and reduced risk of chronic
            diseases like obesity, diabetes, and heart disease. It is an
            important component of overall fitness and can be tailored to suit
            individuals of all ages and fitness levels.
          </p>
          <p className="py-3">
            Below find the appropriate training program for you:
          </p>
        </div>
        <div className="text-white flex flex-col md:flex-row justify-center items-baseline gap-8">
          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Beginner Strength Training Program
            </h3>
            <p className="py-3">Monday: Upper Body Push</p>
            <ol className="ps-4 list-decimal">
              <li>Bodyweight push-ups - 3 sets of 8-10 reps</li>
              <li>Dumbbell shoulder press - 3 sets of 8-10 reps</li>
              <li>Dumbbell tricep extension - 3 sets of 10-12 reps</li>
              <li>Dumbbell chest fly - 3 sets of 10-12 reps</li>
              <li>Dumbbell front raise - 3 sets of 10-12 reps</li>
            </ol>
            <p className="py-3">Tuesday: Lower Body</p>
            <ol className="ps-4 list-decimal">
              <li>Bodyweight squats - 3 sets of 10-12 reps</li>
              <li>Romanian deadlift - 3 sets of 10-12 reps</li>
              <li>Walking lunges - 3 sets of 10-12 reps</li>
              <li>Bodyweight glute bridge - 3 sets of 10-12 reps</li>
              <li>Standing calf raises - 3 sets of 15-20 reps</li>
            </ol>
            <p className="py-3">Thursday: Upper Body Pull</p>
            <ol className="ps-4 list-decimal">
              <li>Bodyweight inverted rows - 3 sets of 8-10 reps</li>
              <li>Lat pulldown machine - 3 sets of 8-10 reps</li>
              <li>Dumbbell bicep curls - 3 sets of 10-12 reps</li>
              <li>Seated cable rows - 3 sets of 10-12 reps</li>
              <li>Bodyweight chin-ups 3 sets of max reps</li>
            </ol>
            <p className="py-3">Friday: Full Body</p>
            <ol className="ps-4 list-decimal">
              <li>Goblet squat - 3 sets of 8-10 reps</li>
              <li>Dumbbell bench press - 3 sets of 8-10 reps</li>
              <li>Dumbbell deadlift - 3 sets of 8-10 reps</li>
              <li>Bodyweight pull-ups - 3 sets of max reps</li>
              <li>Military press - 3 sets of 8-10 reps</li>
            </ol>
            <p className="py-3">Wednesday, Saturday and Sunday - No Workout</p>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Intermediate Strength Training Program
            </h3>
            <p className="py-3">Monday: Upper Body Push</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell bench press - 4 sets of 8-10 reps</li>
              <li>Seated dumbbell shoulder press - 4 sets of 8-10 reps</li>
              <li>Close-grip bench press - 3 sets of 8-10 reps</li>
              <li>Dumbbell incline press - 3 sets of 10-12 reps</li>
              <li>Cable tricep extension - 3 sets of 10-12 reps</li>
            </ol>
            <p className="py-3">Tuesday: Lower Body</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell squat - 4 sets of 8-10 reps</li>
              <li>Romanian deadlift - 4 sets of 8-10 reps</li>
              <li>Leg press - 3 sets of 10-12 reps</li>
              <li>Leg curl - 3 sets of 10-12 reps</li>
              <li>Standing calf raises - 3 sets of 15-20 reps</li>
            </ol>
            <p className="py-3">Thursday: Upper Body Pull</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell row - 4 sets of 8-10 reps</li>
              <li>Lat pulldown - 4 sets of 8-10 reps</li>
              <li>Barbell bicep curls - 3 sets of 10-12 reps</li>
              <li>Seated cable row - 3 sets of 10-12 reps</li>
              <li>Weighted chin-ups - 3 sets of max reps</li>
            </ol>
            <p className="py-3">Friday: Full Body</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell squat - 4 sets of 8-10 reps</li>
              <li>Barbell deadlift - 4 sets of 8-10 reps</li>
              <li>Barbell bench press - 4 sets of 8-10 reps</li>
              <li>Barbell row - 4 sets of 8-10 reps</li>
              <li>Military press - 3 sets of 10-12 reps</li>
            </ol>
            <p className="py-3">Wednesday, Saturday and Sunday - No Workout</p>
          </div>

          <div>
            <h3 className="py-3 text-2xl font-semibold text-[var(--orange)]">
              Advanced Strength Training Program
            </h3>
            <p className="py-3">Monday: Upper Body Push</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell bench press - 5 sets of 5 reps</li>
              <li>Seated dumbbell shoulder press - 5 sets of 5 reps</li>
              <li>Close-grip bench press - 4 sets of 6-8 reps</li>
              <li>Dumbbell incline press - 4 sets of 6-8 reps</li>
              <li>Cable tricep extension - 4 sets of 6-8 reps</li>
            </ol>
            <p className="py-3">Tuesday: Lower Body</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell squat - 5 sets of 5 reps</li>
              <li>Romanian deadlift - 5 sets of 5 reps</li>
              <li>Front squat - 4 sets of 6-8 reps</li>
              <li>Bulgarian split squat - 4 sets of 6-8 reps per leg</li>
              <li>Standing calf raises - 4 sets of 10-12 reps</li>
            </ol>
            <p className="py-3">Thursday: Upper Body Pull</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell row - 5 sets of 5 reps</li>
              <li>Weighted pull-ups - 5 sets of 5 reps</li>
              <li>Barbell bicep curls - 4 sets of 6-8 reps</li>
              <li>Seated cable row - 4 sets of 6-8 reps</li>
              <li>Barbell shrugs - 4 sets of 6-8 reps</li>
            </ol>
            <p className="py-3">Friday: Full Body</p>
            <ol className="ps-4 list-decimal">
              <li>Barbell squat - 5 sets of 5 reps</li>
              <li>Barbell deadlift - 5 sets of 5 reps</li>
              <li>Barbell bench press - 5 sets of 5 reps</li>
              <li>Barbell row - 5 sets of 5 reps</li>
              <li>Military press - 4 sets of 6-8 reps</li>
            </ol>
            <p className="py-3">Wednesday, Saturday and Sunday - No Workout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
