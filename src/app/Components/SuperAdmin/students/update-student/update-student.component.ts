import { Component, Input } from '@angular/core';
import { StudentService } from 'src/app/Core/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  @Input() id: any;
  constructor(public student : StudentService){}
  data = {
    firstName: '',
    lastName:'',
    dateOfBirth:'',
    adress : '',
    email : '',
    registrationDate : ''
    
  }
  update(){
    this.student.updateStudent(this.id, this.data).subscribe();
      
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      this.ngOnInit
  }
  

  ngOnInit(): void {
    this.student.getStudents(this.id).subscribe(
      (response: any) => {
        this.data = response; 
      }
    )
  }
}
