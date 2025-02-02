import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { getById } from '../../api';
import ExerciseDetails from '../../components/exercises/ExerciseDetails.jsx';
import AsyncData from '../../components/AsyncData.jsx';

export default function ExerciseLarge() {
  const { id } = useParams();
  const { data: exercise,isLoading:exerciseLoading, error:exerciseError } = useSWR(`exercises/${id}`, getById);

  return (
    <AsyncData loading={exerciseLoading} error={exerciseError}>
      <ExerciseDetails exercise={exercise} />
    </AsyncData>
  );
}
