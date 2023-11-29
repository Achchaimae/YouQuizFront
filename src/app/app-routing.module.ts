import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import { QuizTimeComponent } from './Components/quiz-time/quiz-time.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';
import { QuestionComponent } from './Components/Trainer/question/question.component';
import { SubjectComponent } from './Components/Trainer/subject/subject.component';
import { LevelComponent } from './Components/Trainer/level/level.component';
import { AnswerComponent } from './Components/Trainer/answer/answer.component';
import { MediaComponent } from './Components/Trainer/media/media.component';

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
  {path : '**' , component : NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
