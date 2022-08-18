import { IExercise } from './exercise.js';

export interface ISchedule {
  userId: string;
  days: IScheduleDay[];
}

export interface IScheduleDay {
  _id: string;
  nickname: string;
  exerciseIds: string[];
}

export interface IScheduleDayWithExercises extends IScheduleDay {
  exercises: IExercise[];
  dayNumber: number;
  dayCount: number;
}
