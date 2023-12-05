import { Component } from '@angular/core';
import { Student } from 'src/app/Core/Models/Student.model';
import { StudentService } from 'src/app/Core/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent {
  page: number = 0;
  totalPages: number = 0;
  Students : Student[] = [];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  selectedId: any;
  constructor(public student : StudentService){}
  ngOnInit() : void {
    this.getTrainer(this.page)
  }


  getTrainer(page: number){
    this.student.getStudents(page).subscribe(
     
      
      data => {
        this.Students = data.content;
        this.totalPages = data.totalPages;  
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
        this.student.deleteStudent(id).subscribe();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.getTrainer(this.page)
      }
      
    }
    );
    
  }
  showUpdateForm(id: any) {  
    this.isShowUpdateForm = true;
    this.selectedId = id;
  }
  closeUpdateForm() {
    this.isShowUpdateForm = false;
    this.getTrainer(this.page);  
    }
  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getTrainer(this.page);
  }
}
