import { ExerciseMuscleGroup, ExerciseType } from './exercise.js';

export interface IWorkout {
  _id: string;
  userId: string;
  createdAt: Date | string;
  /**
   * only populated for completed workouts
   */
  endedAt?: string;
  exercises: IWorkoutExercise[];
  dayNumber: number;
  nickname: string;
  /**
   * only populated for in-progress workouts
   */
  checkIns?: (Date | string)[];
  /**
   * only populated for completed workouts
   */
  durationInSeconds?: number;
}

export interface IWorkoutExercise {
  _id: string;
  name: string;
  exerciseType: ExerciseType;
  primaryMuscleGroup: ExerciseMuscleGroup;
  sets: IWorkoutExerciseSet[];
  performedAt: Date | string;
}

export interface IWorkoutExerciseSet {
  /**
   * populated for weighted and assisted exercises. Should be negative for assisted exercises.
   */
  resistanceInPounds?: number;
  /**
   * populated for weighted and assisted exercises.
   */
  repetitions?: number;
  /**
   * populated for timed exercises.
   */
  timeInSeconds?: number;
  complete: boolean;
}

export type WSWorkoutUpdate =
  | { type: 'START' }
  | { type: 'END' }
  | { type: 'DISCARD' }
  | {
      type: 'PERSIST_SET_COMPLETE';
      exerciseIndex: number;
      setIndex: number;
      complete: boolean;
    }
  | {
      type: 'PERSIST_SET_REPETITIONS';
      exerciseIndex: number;
      setIndex: number;
      repetitions: number | undefined;
    }
  | {
      type: 'PERSIST_SET_RESISTANCE';
      exerciseIndex: number;
      setIndex: number;
      resistanceInPounds: number | undefined;
    }
  | {
      type: 'REPLACE_EXERCISE';
      exerciseIndex: number;
      newExerciseId: string;
    }
  | {
      type: 'ADD_EXERCISE';
      exerciseId: string;
      index: number;
    }
  | {
      type: 'DELETE_EXERCISE';
      index: number;
    };
