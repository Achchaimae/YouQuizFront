import { Component } from '@angular/core';
import { Level } from 'src/app/Core/Models/Level.model';
import { LevelService } from 'src/app/Core/Services/level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent {

  constructor(public levelService: LevelService) { }
  levels: Level[] = [];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  page: number = 0;
  totalPages: number = 0;

  id:number = 0;
  selectedId: any;
  ngOnInit(): void {
    this.getData(this.page);

    
  }
  showUpdateForm(id: any) {  
    this.isShowUpdateForm = true;
    this.selectedId = id;
  }
  getData(page:number) {
    
    this.levelService.getLevels(page).subscribe(
      data => {
        this.levels = data.content
        this.totalPages = data.totalPages
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
        this.levelService.deleteLevel(id).subscribe();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.getData(this.page);
      }
      
    }
    );
    
  }
  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData(this.page);
  }
  closeUpdateForm() {
    this.isShowUpdateForm = false;
    this.getData(this.page);  
    }

    nextPage()
  {
    if(this.page+2<=this.totalPages)
    {
      this.page=++this.page
      this.getData(this.page)
    } 
  }

  prevPage()
  {
    if(this.page-1>=0)
    {
      this.page = --this.page;
      this.getData(this.page)
    } 
  }
}