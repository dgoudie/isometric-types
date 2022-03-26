import { IExercise } from './exercise';

export interface ISchedule {
    userId: string;
    days: IScheduleDay[];
}

export interface IScheduleDay {
    nickname: string;
    exercises: string[];
}

export interface IScheduleDayWithExercises
    extends Omit<IScheduleDay, 'exercises'> {
    exercises: IExercise[];
    dayNumber: number;
    dayCount: number;
}
