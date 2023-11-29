// import { Component,Input } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
// import { Subject } from 'src/app/Core/Models/Subject.model';
// import { SubjectService } from 'src/app/Core/Services/subject.service';
// import Swal from 'sweetalert2';
// @Component({
//   selector: 'app-update-subject-form',
//   templateUrl: './update-subject-form.component.html',
//   styleUrls: ['./update-subject-form.component.css']
// })
// export class UpdateSubjectFormComponent {
//   @Input() id: any;
//   data : any ={
//     title : '',
//     subjectParent_id : '',
  
//   }
//   currentIndex = 0;
//   isShowAddForm : boolean = false;
//   isShowUpdateForm : boolean = false;
//   Subjects: Subject[] = [];
//   subjectReq :Subject[] = [];
//   page: number = 0;
//   totalPages: number = 0;
  
//   getData(page: number) {
//     this.subject.getSubjects(page).subscribe(
//       data => {
//         this.Subjects = data.content
//         this.totalPages = data.totalPages
//       }
//     )
//   }

//   update(){
//     this.subject.updateSubject(this.id, this.data).subscribe();
      
//       Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//       });
//       this.ngOnInit
  
//   }
//   constructor(private act:ActivatedRoute, private subject :SubjectService){}

//   ngOnInit(): void {
   
  
//     this.subject.getSubjects(this.id).subscribe(
//       (response: any) => {
//         this.data = response; // Assign the response to the data property
//         console.log(response);
//       }
//     );
//   }
// }

import { Component, Input } from '@angular/core';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { SubjectReq } from 'src/app/Core/Models/SubjectReq.modul';
import { SubjectService } from 'src/app/Core/Services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-subject-form',
  templateUrl: './update-subject-form.component.html',
  styleUrls: ['./update-subject-form.component.css']
})
export class UpdateSubjectFormComponent {
  constructor(private subjectService:SubjectService){}
  @Input() subjects:Subject[]=[];
  @Input() id:number=0;
  subject:SubjectReq = {
    id:0,
    title:'',
    parentSubject_id:0
  }
  subjectResp:Subject = {
    id: 0,
    title: '',
    parentSubject: {
      id: 0,
      title: '',
      parentSubject_id: 0
    }
  }
  ngOnInit(){
    this.subjectService.getSubject(this.id).subscribe(
      res=>{
        console.log(res)
        this.subjectResp.id= res.id
        this.subjectResp.title= res.title
        this.subjectResp.parentSubject= res.parentSubject
      }
    )
  }
  putData()
  {
    this.subjectService.updateSubject(this.subject,this.id).subscribe();
    Swal.fire({
      //         title: "Good job!",
      //         text: "You clicked the button!",
      //         icon: "success"
      //       });
      //       this.ngOnInit
  })      
  }
}