import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NoSanitizePipe } from './no-sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    AnnouncementsComponent,
    SidebarComponent,
    MyCoursesComponent,
    AttendanceComponent,
    FeedbackComponent,
    NoSanitizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
