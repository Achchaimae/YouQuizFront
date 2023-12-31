import { Component } from '@angular/core';
import { StudentService } from 'src/app/Core/Services/student.service';
import { TrainerService } from 'src/app/Core/Services/trainer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(public student : StudentService){}
  data = {
    firstName: '',
    lastName:'',
    dateOfBirth:'',
    address : '',
    email : '',
    registrationDate : ''
    
  }

  save(){
    this.student.saveStudent(this.data).subscribe();
    this.data ={
      firstName: '',
      lastName:'',
      dateOfBirth:'',
      address : '',
      email : '',
      registrationDate : ''
      
    }
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  
  }

}
