import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { QuizTimeComponent } from './Components/quiz-time/quiz-time.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SideDashboardComponent } from './Components/side-dashboard/side-dashboard.component';
import { AnswerComponent } from './Components/Trainer/answer/answer.component';
import { QuestionComponent } from './Components/Trainer/question/question.component';
import { LevelComponent } from './Components/Trainer/level/level.component';
import { SubjectComponent } from './Components/Trainer/subject/subject.component';
import { MediaComponent } from './Components/Trainer/media/media.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AddLevelFormComponent } from './Components/Trainer/LevelManagement/add-level-form/add-level-form.component';
import { UpdateLevelFormComponent } from './Components/Trainer/LevelManagement/update-level-form/update-level-form.component';
import { AddSubjectFormComponent } from './Components/Trainer/SubjectManagement/add-subject-form/add-subject-form.component';
import { UpdateSubjectFormComponent } from './Components/Trainer/SubjectManagement/update-subject-form/update-subject-form.component';
import { UpdateAnswerFormComponent } from './Components/Trainer/AnswerManagement/update-answer-form/update-answer-form.component';
import { AddAnswerFormComponent } from './Components/Trainer/AnswerManagement/add-answer-form/add-answer-form.component';
import { UpdateMediaFormComponent } from './Components/Trainer/MediaManagement/update-media-form/update-media-form.component';
import { AddMediaFormComponent } from './Components/Trainer/MediaManagement/add-media-form/add-media-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentDashboardComponent,
    NotFoundComponent,
    QuizTimeComponent,
    LoginComponent,
    SignUpComponent,
    SideDashboardComponent,
    AnswerComponent,
    QuestionComponent,
    LevelComponent,
    SubjectComponent,
    MediaComponent,
    AddLevelFormComponent,
    UpdateLevelFormComponent,
    AddSubjectFormComponent,
    UpdateSubjectFormComponent,
    UpdateAnswerFormComponent,
    AddAnswerFormComponent,
    UpdateMediaFormComponent,
    AddMediaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
