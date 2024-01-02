import { Component } from '@angular/core';
import { Answer } from 'src/app/Core/Models/Answer.model';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  currentIndex = 0;
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  selectedId: any;


  Answers: Answer[] = [];
  page: number = 0;
  totalPages: number = 0;

  constructor(public AnswerService: AnswerService) { }
  ngOnInit(): void {
    this.getData(this.page)
  }
  getData(page: number) {
    this.AnswerService.getAnswers(page).subscribe(
      data => {
        this.Answers = data.content;
        this.totalPages = data.totalPages;        
      }
    );
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
        this.AnswerService.deleteAnswer(id).subscribe();
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
