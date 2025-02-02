import './App.css';
import { axios } from './api/index.js';
import useSWR from 'swr';
import AsyncData from './components/AsyncData.jsx';
import ProfileComponent from './components/Profile/ProfileComponent.jsx';
import WorkoutCard from './components/workouts/WorkoutCard.jsx';
import ExerciseCard from './components/exercises/ExerciseCard.jsx';
import { getById, getAll } from './api/index.js';

const contentURL = axios.defaults.contentURL;
  
const handleImageError = (e) => {
  e.target.src = `${contentURL}/images/profilePictures/0.jpg`;
};

function App() {
  const { data: user, isLoading: userLoading, error: userError } = useSWR('users/me', getById);
  const { data: workouts = [], isLoading: workoutsLoading, error: workoutError } = useSWR('workouts', getAll);
  const { data: exercises = [], isLoading: exercisesLoading, error: exercisesError } = useSWR('exercises', getAll);
  const { data: bmiData, isLoading: bmiLoading, error: bmiError } = useSWR('bmi', getById);

  return (
    <div>
      <div className="flex flex-col lg:flex-row pt-1">
        <div className="hidden lg:block lg:fixed left-0 top-0 lg:h-full w-full lg:w-1/5 p-4 
        bg-white shadow-lg overflow-y-auto my-16 lg:my-0 pt-16">
          <h1 className="text-2xl font-bold mb-4 pt-8 text-center">Workouts</h1>
          <div className="flex flex-col gap-6">
            <AsyncData loading={workoutsLoading || userLoading} error={workoutError || userError}>
              {workouts && workouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} user={user} homepage={true} />
              ))}
            </AsyncData>
          </div>
        </div>
        <div className="hidden lg:block p-4 lg:mx-40 xl:mx-60">
          <h1 className="text-3xl font-bold mb-4 text-center">Exercises</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <AsyncData loading={exercisesLoading || userLoading} error={exercisesError || userError}>
              {exercises && exercises.map((exercise) => (
                <div key={exercise.id} className="p-2">
                  <ExerciseCard exercise={exercise} currentUserRoles={user.roles} homepage={true} />
                </div>
              ))}
            </AsyncData>
          </div>
        </div>
        <div className="block lg:hidden fixed right-0 top-0 h-full w-full lg:w-1/5 flex items-center justify-center p-4 
        bg-white shadow-lg mt-16 lg:mt-0">
          <AsyncData loading={userLoading || bmiLoading} error={userError || bmiError}>
            {user && (
              <ProfileComponent
                user={user}
                bmiData={bmiData}
                contentURL={contentURL}
                handleImageError={handleImageError}
              />
            )}
          </AsyncData>
        </div>
        <div className="hidden lg:block fixed right-0 top-0 h-full w-1/5 flex items-center justify-center p-4 
        bg-white shadow-lg pt-16">
          <AsyncData loading={userLoading || bmiLoading} error={userError || bmiError}>
            {user && (
              <ProfileComponent
                user={user}
                bmiData={bmiData}
                contentURL={contentURL}
                handleImageError={handleImageError}
              />
            )}
          </AsyncData>
        </div>
      </div>
    </div>
  );
}

export default App;