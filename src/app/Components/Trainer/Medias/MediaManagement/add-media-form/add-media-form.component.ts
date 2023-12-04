import { Component } from '@angular/core';
import { MediaService } from 'src/app/Core/Services/media.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-media-form',
  templateUrl: './add-media-form.component.html',
  styleUrls: ['./add-media-form.component.css']
})
export class AddMediaFormComponent {
  constructor(public media : MediaService){}
data = {
  link : '',
  name :'',
  type: ''
}
save(){
  this.media.saveMedia(this.data).subscribe();
  this.data ={
    name :'',
    link : '',
    type  : ''
  }
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });

}
}
