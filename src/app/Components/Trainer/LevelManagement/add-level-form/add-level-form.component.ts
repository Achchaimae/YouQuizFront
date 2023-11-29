import { Component } from '@angular/core';
import { LevelService } from 'src/app/Core/Services/level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-level-form',
  templateUrl: './add-level-form.component.html',
  styleUrls: ['./add-level-form.component.css']
})
export class AddLevelFormComponent {

  data={
    name :'',
    minPoint :0 ,
    maxPoint :0 
  }
  save(){
    this.level.addLevel(this.data).subscribe();
    this.data ={
      name :'',
      minPoint :0 ,
      maxPoint :0 
    }
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  
  }

  constructor(public level : LevelService){}
}
