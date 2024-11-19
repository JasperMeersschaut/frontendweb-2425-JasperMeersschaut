import { Link } from 'react-router-dom';
import LoremIpsum from 'react-lorem-ipsum';

export default function WorkoutExerciseCard({ exercise }) {
  if (!exercise) return <div>Loading...</div>;

  return (
    <div className="flex flex-col sm:flex-row mb-4 border rounded p-3 h-auto sm:h-48">
      <div className="w-full sm:w-1/4 h-48 sm:h-full">
        <Link to={`/exercises/${exercise.id}`}>
          <img
            src={`http://localhost:9000/images/exercises/${exercise.id}.jpg`}
            className="w-full h-full object-contain border border-gray-300"
            alt={exercise.type}
            onError={(e) => (e.target.src = 'http://localhost:9000/images/exercises/default.jpg')}
          />
        </Link>
      </div>
      <div className="w-full sm:w-3/4 pl-0 sm:pl-4 flex flex-col justify-between mt-4 sm:mt-0">
        <div>
          <Link to={`/exercises/${exercise.id}`} className="text-lg font-medium text-black no-underline">
            <h5>{exercise.type}</h5>
          </Link>
          <p className="text-gray-700">Muscle Group: {exercise.muscleGroup}</p>
        </div>
        <p className="text-gray-600">
          <LoremIpsum p={1} avgSentencesPerParagraph={2} />
        </p>
      </div>
    </div>
  );
}