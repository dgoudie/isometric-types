import { IExercise } from './exercise';

export interface ISchedule {
    userId: string;
    days: IScheduleDay[];
}

export interface IScheduleDay {
    nickname: string;
    exerciseIds: string[];
}

export interface IScheduleDayWithExercises extends IScheduleDay {
    exercises: IExercise[];
    dayNumber: number;
    dayCount: number;
}
