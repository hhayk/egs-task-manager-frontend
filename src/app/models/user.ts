import { TaskModel } from './task';

export class UserModel {
    public id: number;
    public name: string;
    public tasks: Array<TaskModel> = [];
    public notifications: Array<Notification> = [];
}
