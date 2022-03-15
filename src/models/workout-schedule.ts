export interface IWorkoutSchedule {
    userId: string;
    days: IWorkoutScheduleDay[];
}

export interface IWorkoutScheduleDay {
    exercises: string[];
}
