import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotificationRootComponent } from './components/notifications/notification-root/notification-root.component';
import { TaskComponent } from './components/task/task.component';
import { UserListComponent } from './components/task/user-list/user-list.component';
import { UserTaskComponent } from './components/task/user-task/user-task.component';
import { UserService } from './services/user.service';
import { EnvironmentService } from './services/environment.service';
import { AddCommentPopupComponent } from './components/task/popup/add-comment-popup/add-comment-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotificationRootComponent,
    TaskComponent,
    UserListComponent,
    UserTaskComponent,
    AddCommentPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EnvironmentService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [AddCommentPopupComponent]
})
export class AppModule { }
