import { Component } from '@angular/core';
import { TrainerService } from 'src/app/Core/Services/trainer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent {
  constructor(public trainer : TrainerService){}
  data = {
    firstName: '',
    lastName:'',
    dateOfBirth:'',
    adress : '',
    email : '',
    speciality : ''
    
  }

  save(){
    this.trainer.saveTrainer(this.data).subscribe();
    this.data ={
      firstName: '',
      lastName:'',
      dateOfBirth:'',
      adress : '',
      email : '',
      speciality : ''
      
    }
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  
  }
}
