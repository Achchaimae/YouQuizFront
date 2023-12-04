import { Component } from '@angular/core';
import { Question } from 'src/app/Core/Models/Question.model';
import { QuestionService } from 'src/app/Core/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  Question : Question[] = [];
  page: number = 0;
  totalPages: number = 0;
  isShowAddForm : boolean = false;
  currentIndex = 0;
  isShowUpdateForm : boolean = false;
  selectedId: any;
  constructor(public QuestionService: QuestionService) { }
  ngOnInit(): void {
    this.getData(this.page);
  }

  getData(page:number) {
    
    
    this.QuestionService.getQuestions(page).subscribe(  
      data => {
        this.Question = data.content
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
        this.QuestionService.deleteQuestion(id).subscribe();
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
  showUpdateForm(id: any) {  
    this.isShowUpdateForm = true;
    this.selectedId = id;
  }
  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData(this.page);
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
