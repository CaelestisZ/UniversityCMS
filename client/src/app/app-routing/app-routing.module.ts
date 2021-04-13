import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { AttendanceComponent } from '../attendance/attendance.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { MyCoursesComponent } from '../my-courses/my-courses.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'notifications', component: AnnouncementsComponent},
  {path: 'my-courses', component: MyCoursesComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'feedback', component: FeedbackComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
