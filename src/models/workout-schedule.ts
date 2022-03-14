export interface WorkoutSchedule {
    userId: string;
    days: WorkoutScheduleDay[];
}

export interface WorkoutScheduleDay {
    exercises: string[];
}
