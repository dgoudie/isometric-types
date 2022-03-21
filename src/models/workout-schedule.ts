export interface IWorkoutSchedule {
    userId: string;
    days: IWorkoutScheduleDay[];
}

export interface IWorkoutScheduleDay {
    _id: string;
    nickname: string;
    exercises: string[];
}
