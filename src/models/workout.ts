export interface IWorkout {
    userId: string;
    startedAt: string;
    endedAt?: string;
    exerciseIds: string[];
}
