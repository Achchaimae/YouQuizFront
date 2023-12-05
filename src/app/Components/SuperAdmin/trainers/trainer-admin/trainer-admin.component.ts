import { Component } from '@angular/core';
import { Trainer } from 'src/app/Core/Models/Trainer.model';
import { TrainerService } from 'src/app/Core/Services/trainer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trainer-admin',
  templateUrl: './trainer-admin.component.html',
  styleUrls: ['./trainer-admin.component.css']
})
export class TrainerAdminComponent {
  page: number = 0;
  totalPages: number = 0;
  Trainers : Trainer[] = [];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  selectedId: any;
  constructor(public trainer : TrainerService){}
  ngOnInit() : void {
    this.getTrainer(this.page)
  }


  getTrainer(page: number){
    this.trainer.getTrainers(page).subscribe(
     
      
      data => {
        this.Trainers = data.content;
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
        this.trainer.deleteTrainer(id).subscribe();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.ngOnInit()
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
