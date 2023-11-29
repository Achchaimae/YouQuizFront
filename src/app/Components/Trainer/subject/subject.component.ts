import { Component } from '@angular/core';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { SubjectService } from 'src/app/Core/Services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  // random color generator
  colors: string[] = ['#5EEAD4', '#173753', '#2892D7'];
  currentIndex = 0;
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  selectedId: any;
  getColor(): string {
    const color = this.colors[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    return color;
  }
  //end of the function

  constructor(public SubjectService: SubjectService) { }
  Subjects: Subject[] = [];
  page: number = 0;
  totalPages: number = 0;
  ngOnInit(): void {
    this.getData(this.page)
  }

  getData(page: number) {
    this.SubjectService.getSubjects(page).subscribe(
      data => {
       
        this.Subjects = data.content;
        this.totalPages = data.totalPages;
        
        console.log(this.Subjects[0].parentSubject); // Logs the parentSubject object or null

        if (this.Subjects[1].parentSubject) {
          console.log(this.Subjects[1].parentSubject.id); // Logs the parentSubject id if it exists
        }        
        
      }
    );
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
        this.SubjectService.deleteSubject(id).subscribe();
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
  showUpdateForm(id: any) {  
    this.isShowUpdateForm = true;
    this.selectedId = id;
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
}
