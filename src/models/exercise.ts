import { ElementOf, literals } from '../utils';
import { IWorkout, IWorkoutExercise, IWorkoutExerciseSet } from './workout';

export const ExerciseMuscleGroups = literals(
  'cardio',
  'abductors',
  'adductors',
  'glutes',
  'hamstrings',
  'quads',
  'calves',
  'obliques',
  'abs',
  'lats',
  'chest',
  'traps',
  'lower back',
  'shoulders',
  'forearms',
  'triceps',
  'biceps'
);

export type ExerciseMuscleGroup = ElementOf<typeof ExerciseMuscleGroups>;

export const ExerciseTypes = literals(
  'weighted',
  'assisted',
  'rep_based',
  'timed'
);

export type ExerciseType = ElementOf<typeof ExerciseTypes>;

export interface IExercise {
  _id: string;
  userId: string;
  name: string;
  setCount: number;
  breakTimeInSeconds: number;
  primaryMuscleGroup: ExerciseMuscleGroup;
  secondaryMuscleGroups?: ExerciseMuscleGroup[];
  exerciseType: ExerciseType;
  /**
   * only populated if {@link exerciseType} is 'weighted' or 'assisted'
   */
  minimumRecommendedRepetitions?: number;
  /**
   * only populated if {@link exerciseType} is 'weighted' or 'assisted'
   */
  maximumRecommendedRepetitions?: number;
  /**
   * only populated if {@link exerciseType} is 'timed'
   */
  timePerSetInSeconds?: number;
}

export interface IExerciseExtended extends IExercise {
  instances: IWorkout & { totalRepsForInstance: number }[];
  lastPerformed?: Date | string;
  bestInstance?: IWorkout & { totalRepsForInstance: number };
  bestSet?: IWorkoutExerciseSet;
}
