import { Component, Input } from '@angular/core';
import { TrainerService } from 'src/app/Core/Services/trainer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent {
  @Input() id: any;
  constructor(public trainer : TrainerService){}
  data = {
    firstName: '',
    lastName:'',
    dateOfBirth:'',
    adress : '',
    email : '',
    speciality : ''
    
  }
  update(){
    this.trainer.updateTrainer(this.id, this.data).subscribe();
      
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      this.ngOnInit
  }
  

  ngOnInit(): void {
    this.trainer.getTrainers(this.id).subscribe(
      (response: any) => {
        this.data = response; 
      }
    )
  }
}
