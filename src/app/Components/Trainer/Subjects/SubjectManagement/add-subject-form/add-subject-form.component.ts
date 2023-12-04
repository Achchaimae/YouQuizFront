import { Component } from '@angular/core';
import { SubjectService } from 'src/app/Core/Services/subject.service';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { SubjectReq } from 'src/app/Core/Models/SubjectReq.modul';

@Component({
  selector: 'app-add-subject-form',
  templateUrl: './add-subject-form.component.html',
  styleUrls: ['./add-subject-form.component.css']
})
export class AddSubjectFormComponent {
  form: FormGroup;

  constructor(public subject : SubjectService){
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      parentSubject: new FormControl(null)
    });
  }
  currentIndex = 0;
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  Subjects: Subject[] = [];
  subjectReq :Subject[] = [];
  page: number = 0;
  totalPages: number = 0;
  data = {
    title: '',
    parentSubject: null
  };
  ngOnInit(): void {
    this.getData(this.page)
  }

  getData(page: number) {
    this.subject.getSubjects(page).subscribe(
      data => {
        this.Subjects = data.content
        this.totalPages = data.totalPages
      }
    )
  }
  save() {
    if (this.form.valid) {
      const selectedParentSubjectId = this.form.get('parentSubject')?.value;
  
      const subjectReq: SubjectReq = {
        id: 0,
        title: this.form.get('title')?.value,
        parentSubject_id: selectedParentSubjectId
      };
  
      this.subject.addSubject(subjectReq).subscribe(() => {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      });
  
      this.form.reset();
      
    }
  }

}
