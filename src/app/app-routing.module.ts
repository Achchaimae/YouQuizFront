import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import { QuizTimeComponent } from './Components/quiz-time/quiz-time.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';
import { QuestionComponent } from './Components/Trainer/Questions/question/question.component';
import { SubjectComponent } from './Components/Trainer/Subjects/subject/subject.component';
import { LevelComponent } from './Components/Trainer/Levels/level/level.component';
import { AnswerComponent } from './Components/Trainer/Answers/answer/answer.component';
import { MediaComponent } from './Components/Trainer/Medias/media/media.component';
import { DashboardComponent } from './Components/SuperAdmin/dashboard/dashboard.component';
import { StudentAdminComponent } from './Components/SuperAdmin/students/student-admin/student-admin.component';

const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'quizTime' , component: QuizTimeComponent},
  {path : 'login' , component : LoginComponent},
  {path : "signUp" ,component : SignUpComponent},
  {path : "dashboard", component :StudentDashboardComponent },
  {path : "level", component : LevelComponent },
  {path : "question", component : QuestionComponent },
  {path : "answer", component : AnswerComponent },
  {path : "subject", component : SubjectComponent },
  {path : "media", component : MediaComponent },
  {path : "SpAdmin", component : DashboardComponent },
  {path : "SpStudent" , component : StudentAdminComponent},
  {path : '**' , component : NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
