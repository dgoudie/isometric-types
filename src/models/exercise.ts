import { ElementOf, literals } from '../utils/index.js';
import { IWorkout, IWorkoutExercise, IWorkoutExerciseSet } from './workout.js';

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

  createdAt: Date | string;
}

export interface IExerciseExtended extends IExercise {
  lastPerformed?: Date | string;
  bestInstance?: IWorkoutExercise & { totalRepsForInstance: number };
  bestSet?: IWorkoutExerciseSet;
}
