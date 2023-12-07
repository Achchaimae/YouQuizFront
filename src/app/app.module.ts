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
import { AnswerComponent } from './Components/Trainer/Answers/answer/answer.component';
import { QuestionComponent } from './Components/Trainer/Questions/question/question.component';
import { LevelComponent } from './Components/Trainer/Levels/level/level.component';
import { SubjectComponent } from './Components/Trainer/Subjects/subject/subject.component';
import { MediaComponent } from './Components/Trainer/Medias/media/media.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AddLevelFormComponent } from './Components/Trainer/Levels/LevelManagement/add-level-form/add-level-form.component';
import { UpdateLevelFormComponent } from './Components/Trainer/Levels/LevelManagement/update-level-form/update-level-form.component';
import { AddSubjectFormComponent } from './Components/Trainer/Subjects/SubjectManagement/add-subject-form/add-subject-form.component';
import { UpdateSubjectFormComponent } from './Components/Trainer/Subjects/SubjectManagement/update-subject-form/update-subject-form.component';
import { UpdateAnswerFormComponent } from './Components/Trainer/Answers/AnswerManagement/update-answer-form/update-answer-form.component';
import { AddAnswerFormComponent } from './Components/Trainer/Answers/AnswerManagement/add-answer-form/add-answer-form.component';
import { UpdateMediaFormComponent } from './Components/Trainer/Medias/MediaManagement/update-media-form/update-media-form.component';
import { AddMediaFormComponent } from './Components/Trainer/Medias/MediaManagement/add-media-form/add-media-form.component';
import { AddQuestionFormComponent } from './Components/Trainer/Questions/QuestionManagement/add-question-form/add-question-form.component';
import { UpdateQuestionFormComponent } from './Components/Trainer/Questions/QuestionManagement/update-question-form/update-question-form.component';
import { SwipperComponent } from './Components/Trainer/Questions/QuestionManagement/swipper/swipper.component';
import { AnswersFromComponent } from './Components/Trainer/Questions/QuestionManagement/answers-from/answers-from.component';
import { DashboardComponent } from './Components/SuperAdmin/dashboard/dashboard.component';
import { SupAdminNavbarComponent } from './Components/SuperAdmin/sup-admin-navbar/sup-admin-navbar.component';
import { TrainerAdminComponent } from './Components/SuperAdmin/trainers/trainer-admin/trainer-admin.component';
import { StudentAdminComponent } from './Components/SuperAdmin/students/student-admin/student-admin.component';
import { AddStudentComponent } from './Components/SuperAdmin/students/add-student/add-student.component';
import { UpdateStudentComponent } from './Components/SuperAdmin/students/update-student/update-student.component';
import { UpdateTrainerComponent } from './Components/SuperAdmin/trainers/update-trainer/update-trainer.component';
import { AddTrainerComponent } from './Components/SuperAdmin/trainers/add-trainer/add-trainer.component';
import { QuizComponent } from './Components/Trainer/quizzes/quiz/quiz.component';
import { AddQuizFormComponent } from './Components/Trainer/quizzes/QuizManagement/add-quiz-form/add-quiz-form.component';
import { UpdateQuizFormComponent } from './Components/Trainer/quizzes/QuizManagement/update-quiz-form/update-quiz-form.component';
import { QuestionsFormComponent } from './Components/Trainer/quizzes/QuizManagement/questions-form/questions-form.component';
import { PassQuizComponent } from './Components/Student/pass-quiz/pass-quiz.component';
import { StudentNavbarComponent } from './Components/Student/student-navbar/student-navbar.component';


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
    AddQuestionFormComponent,
    UpdateQuestionFormComponent,
    SwipperComponent,
    AnswersFromComponent,
    DashboardComponent,
    SupAdminNavbarComponent,
    TrainerAdminComponent,
    StudentAdminComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    UpdateTrainerComponent,
    AddTrainerComponent,
    QuizComponent,
    AddQuizFormComponent,
    UpdateQuizFormComponent,
    QuestionsFormComponent,
    PassQuizComponent,
    StudentNavbarComponent,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
