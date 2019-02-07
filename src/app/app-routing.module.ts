import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotificationRootComponent } from './components/notifications/notification-root/notification-root.component';
import { TaskComponent } from './components/task/task.component';
import { UserTaskComponent } from './components/task/user-task/user-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskComponent, canActivate: [] },
  { path: 'tasks/create', component: UserTaskComponent, canActivate: [] },
  { path: 'tasks/edit', component: UserTaskComponent, canActivate: [] },
  { path: 'notifications', component: NotificationRootComponent, canActivate: [] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
