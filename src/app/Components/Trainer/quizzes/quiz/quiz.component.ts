import { Component } from '@angular/core';
import { QuizService } from 'src/app/Core/Services/quiz.service';
import { Quiz } from 'src/app/Core/Models/Quiz.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(public quizService: QuizService) { }
  Quizzes : Quiz[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  page: number = 0;
  totalPages: number = 0;

  id:number = 0;
  selectedId: any;
  ngOnInit(): void {
    this.getData(this.page);

    
  }
  getData(page:number) {
    
    this.quizService.getQuizzes(page).subscribe(
      data => {
        this.Quizzes = data.content
        this.totalPages = data.totalPages
      }
    )
  }

  delete(id: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.deleteQuiz(id).subscribe();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.getData(this.page);
      }
      
    }
    );
    
  }
  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData(this.page);
  }
  showUpdateForm(id: any) {  
    this.isShowUpdateForm = true;
    this.selectedId = id;
  }
  closeUpdateForm() {
    this.isShowUpdateForm = false;
    this.getData(this.page);  
    }

    nextPage()
  {
    if(this.page+2<=this.totalPages)
    {
      this.page=++this.page
      this.getData(this.page)
    } 
  }

  prevPage()
  {
    if(this.page-1>=0)
    {
      this.page = --this.page;
      this.getData(this.page)
    } 
  }
}
