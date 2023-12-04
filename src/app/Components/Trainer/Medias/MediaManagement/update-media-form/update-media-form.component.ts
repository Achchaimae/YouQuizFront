import { Component, Input } from '@angular/core';
import { MediaService } from 'src/app/Core/Services/media.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-media-form',
  templateUrl: './update-media-form.component.html',
  styleUrls: ['./update-media-form.component.css']
})
export class UpdateMediaFormComponent {
  constructor (private Media : MediaService   ){}

  @Input() id: any;
  data : any ={
    link : '',
    name : '',
    type : ''
  }
  update(){
    this.Media.updateMedia(this.id, this.data).subscribe();
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
    this.ngOnInit()
  }
  ngOnInit(): void{
    this.Media.getMedia(this.id).subscribe(
      (response: any) => {
        this.data = response
        console.log(response)
      }
    )
  }
}
