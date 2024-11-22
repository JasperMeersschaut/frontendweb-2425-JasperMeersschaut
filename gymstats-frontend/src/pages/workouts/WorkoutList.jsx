import useSWR from 'swr';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { getAll } from '../../api';
import WorkoutCard from '../../components/workouts/WorkoutCard.jsx';
import AsyncData from '../../components/AsyncData.jsx';

export default function WorkoutList() {
  const { data: workouts = [], isLoading: workoutsLoading, error: workoutError } = useSWR('workouts', getAll);
  const { data: muscleFocuses, isLoading: muscleFocusesLoading, error: muscleFocusesError } 
  = useSWR('workouts/muscle-focuses', getAll);
  const [minDuration, setMinDuration] = useState('');
  const [maxDuration, setMaxDuration] = useState('');
  const [selectedMuscleFocus, setSelectedMuscleFocus] = useState('');

  useEffect(() => {
    const durationFilter = sessionStorage.getItem('durationFilter');
    if (durationFilter) {
      const [min, max] = durationFilter.split('-');
      setMinDuration(min);
      setMaxDuration(max);
    }
    const muscleFocusFilter = sessionStorage.getItem('muscleFocusFilter');
    if (muscleFocusFilter) {
      setSelectedMuscleFocus(muscleFocusFilter);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('durationFilter', `${minDuration}-${maxDuration}`);
    sessionStorage.setItem('muscleFocusFilter', selectedMuscleFocus);
  }, [minDuration, maxDuration, selectedMuscleFocus]);

  const filteredWorkouts = useMemo(
    () =>
      workouts.filter((workout) => {
        const duration = parseInt(workout.duration, 10);
        const min = parseInt(minDuration, 10);
        const max = parseInt(maxDuration, 10);
        const durationMatch = (!min || duration >= min) && (!max || duration <= max);
        const muscleFocusMatch = !selectedMuscleFocus || workout.muscleFocus === selectedMuscleFocus;
        return durationMatch && muscleFocusMatch;
      }),
    [workouts, minDuration, maxDuration, selectedMuscleFocus],
  );

  const handleMinDurationChange = useCallback((e) => {
    setMinDuration(e.target.value);
  }, []);

  const handleMaxDurationChange = useCallback((e) => {
    setMaxDuration(e.target.value);
  }, []);

  const handleMuscleFocusChange = useCallback((e) => {
    setSelectedMuscleFocus(e.target.value);
  }, []);

  return (
    <div className='container mx-auto'>
      <h1 className="text-3xl font-bold mb-4 mt-3 text-center">Workouts</h1>
      <div className="mb-4 flex justify-center">
        <div className="flex flex-col space-y-4 items-center">
          <h5 className="text-xl font-semibold mb-4">Filter:</h5>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Min Duration (min)"
              value={minDuration}
              onChange={handleMinDurationChange}
              className="border rounded px-4 py-2"
            />
            <input
              type="number"
              placeholder="Max Duration (min)"
              value={maxDuration}
              onChange={handleMaxDurationChange}
              className="border rounded px-4 py-2"
            />
          </div>
          <AsyncData loading={muscleFocusesLoading} error={muscleFocusesError}>
            <select
              value={selectedMuscleFocus}
              onChange={handleMuscleFocusChange}
              className="border rounded px-4 py-2"
            >
              <option value="">All</option>
              {muscleFocuses && muscleFocuses.map((focus) => (
                <option key={focus} value={focus}>
                  {focus}
                </option>
              ))}
            </select>
          </AsyncData>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AsyncData loading={workoutsLoading} error={workoutError}>
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </AsyncData>
      </div>
    </div>
  );
}