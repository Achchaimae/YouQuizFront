import { Component , Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LevelService } from 'src/app/Core/Services/level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-level-form',
  templateUrl: './update-level-form.component.html',
  styleUrls: ['./update-level-form.component.css']
})
export class UpdateLevelFormComponent {
  @Input() id: any;
  data : any ={
    name : '',
    minPoint : '',
    masPoint : ''
  }
  
  update(){
    this.level.updateLevel(this.id, this.data).subscribe();
      
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      this.ngOnInit
  
  }
  

  constructor(private act:ActivatedRoute, private level :LevelService   ){}


  ngOnInit(): void {
   
  
    this.level.getLevel(this.id).subscribe(
      (response: any) => {
        this.data = response; // Assign the response to the data property
        console.log(response);
      }
    );
  }

}
