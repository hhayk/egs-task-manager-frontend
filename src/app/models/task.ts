import { CommentModel } from './comment';

export class TaskModel {
    public id: number;
    public name: string;
    public status: TaskStatus;
    public severity: TaskSeverity;
    public createdDate: number;
    public comments: Array<CommentModel> = [];
}

export enum TaskAction {
    CREATE, EDIT, BROWSE
}

export enum TaskStatus {
    STATUS_1, STATUS_2, STATUS_3
}

export enum TaskSeverity {
    LOW, MEDIUM, HIGH
}

export class TaskEditOrCreateState {
    constructor(public action: TaskAction, public userId: number, public task?: TaskModel) { }
}
