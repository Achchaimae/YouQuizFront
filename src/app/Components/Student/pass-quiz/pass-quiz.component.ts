import { Component } from '@angular/core';
import { AssignQuiz } from 'src/app/Core/Models/AssignQuiz.model';
import { Question } from 'src/app/Core/Models/Question.model';
import { Quiz } from 'src/app/Core/Models/Quiz.model';
import { StudentAnswerReq } from 'src/app/Core/Models/StudentAnswerReq.model';
import { AssignQuizService } from 'src/app/Core/Services/assign-quiz.service';
import { QuizService } from 'src/app/Core/Services/quiz.service';
import { StudentAnswerService } from 'src/app/Core/Services/student-answer.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pass-quiz',
  templateUrl: './pass-quiz.component.html',
  styleUrls: ['./pass-quiz.component.css']
})
export class PassQuizComponent {
  score: number;
  index: number = 0;
  Quiz: Quiz = {
    id: 0,
    chances: '',
    comment: '',
    duration: '',
    passScore: 0,
    trainer: null,
    tempQuizs: []
  };
  Question: Question | null = {
    id: 0,
    text: '',
    type: '',
    subject: null,
    level: null,
    media: null,
    validations: []
  };
  Tempduration!: number;
  restOftime:number=0;
  intervalID:any;
  quizId!:string;
  constructor(public QuizService: QuizService, 
    private assignQuizService: AssignQuizService,
     private studentAnswerService: StudentAnswerService,
     private router: Router,
     private route: ActivatedRoute) {
    this.score = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizId = params['id'];
      this.getQuiz(this.quizId);
    });
    // this.getQuiz();
  }

    getQuiz(quizId:string) {
      
      this.QuizService.getQuizById(quizId).subscribe(
        
        data => {
          // console.log(data);
          this.Quiz = data;
          this.Question = this.Quiz.tempQuizs[this.index].question;
          this.startTimer(this.Quiz.tempQuizs[this.index].duration)
          this.Tempduration = this.Quiz.tempQuizs[this.index].duration;
          this.index = 0; // Reset the index
          this.changeQuestion();
        
        }
      );
    }

  changeBackgroundColor(index: number) {
    const answerOptions = document.getElementsByClassName('border-[#173753]');
    for (let i = 0; i < answerOptions.length; i++) {
      const element = answerOptions[i] as HTMLElement;
      if (i === index) {
        element.classList.add('bg-[#5EEAD4]');
        const selectedValidation = this.Question?.validations[i];
        if (selectedValidation) {
          console.log('Selected Answer Point:', selectedValidation.points);
        }
      } else {
        element.classList.remove('bg-[#5EEAD4]');
      }
    }
  }

  calculateScore() {
    if (this.Question && this.Question.validations) {
      for (const validation of this.Question.validations) {
        if (validation.correct) {
          // i need to add  something with the correct answer
        }
      }
    }
  }


  save() {
    if (this.Question && this.Question.validations) {
      const selectedValidation = this.Question.validations.find((validation, index) => {
        const element = document.getElementsByClassName('border-[#173753]')[index] as HTMLElement;
        return element.classList.contains('bg-[#5EEAD4]');
      });
  
      if (selectedValidation) {
        this.score += selectedValidation.points;
        console.log('Selected Answer Point:', selectedValidation.points);
        console.log('Score: ' + this.score);
  
        const assignQuizId = 1; 
        const validationId = selectedValidation.id;
  
        const studentAnswer: StudentAnswerReq = {
          AssignQuiz_id: assignQuizId,
          Validation_id: validationId
        };
  
        // Save the selected answer
        this.studentAnswerService.saveStudentAnswer(assignQuizId,validationId).subscribe(
          response => {
            // Handle the response if needed
            console.log('Selected answer saved successfully');
          },
          error => {
            // Handle the error if saving fails
            console.error('Failed to save selected answer:', error);
          }
        );
      }
    }
  
    // Proceed to the next question
    this.index += 1;
  
    if (this.index >= this.Quiz.tempQuizs.length) {
      // All questions have been answered
      Swal.fire("Congrats! You Score is " + this.score);
      return;
    }
  
    this.changeQuestion();
  }
  startTimer(time: number) {
    this.restOftime = time;
    this.intervalID = setInterval(() => {
      if (this.restOftime > 0) {
        this.restOftime--;
      } else {
        clearInterval(this.intervalID); // Stop the timer
        this.goToNextQuestion(); // Skip to the next question
      }
    }, 1000);
  }
  changeQuestion() {
    this.Question = this.Quiz.tempQuizs[this.index].question;
    this.Tempduration = this.Quiz.tempQuizs[this.index].duration;
    this.startTimer(this.Tempduration);
  }
  goToNextQuestion() {
    this.index += 1;
  
    if (this.index >= this.Quiz.tempQuizs.length) {
      // alert("You'r Quiz is over , Your Score is" + this.score)
      this.router.navigate(['/']);
      

      return;
    }
  
    this.changeQuestion();
  }
}