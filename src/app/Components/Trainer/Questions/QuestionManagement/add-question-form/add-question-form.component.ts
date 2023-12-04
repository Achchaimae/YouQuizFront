import { Component } from '@angular/core';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { Level } from 'src/app/Core/Models/Level.model';
import { Media } from 'src/app/Core/Models/Media.model';
import { LevelService } from 'src/app/Core/Services/level.service';
import { MediaService } from 'src/app/Core/Services/media.service';
import { QuestionService } from 'src/app/Core/Services/question.service';
import Swal from 'sweetalert2';
import { SubjectService } from 'src/app/Core/Services/subject.service';
import { Title } from '@angular/platform-browser';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import { Answer } from 'src/app/Core/Models/Answer.model';
import { QuestionReq } from 'src/app/Core/Models/QuestionReq.model';

@Component({
  selector: 'app-add-question-form',
  templateUrl: './add-question-form.component.html',
  styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent {
  step = 1 
  levels: Level[] = [];
  Medias : Media[] = [];
  Subjects: Subject[] = [];
  Answers : Answer[] = [];
  SubjectBytitle: Subject[] = [];
  page: number = 0;
  searchTerm: string = '';
  totalPages: number = 0;
  selectedMedia: any = null; 
  questionReq:QuestionReq ={
    id: 0,
    text: '',
    type: '',
    subject_id: 0,
    level_id: 0,
    media_id: 0
  }
  // data={
  //   text: '',
  //   type: '',
  //   subject: '',
  //   level: '',
  //   media: '',
  //   validations: ''
  // }
  save(){
    // console.log(this.questionReq)
    this.Question.addQuestion(this.questionReq).subscribe(
      res => console.log(res.id)
    );
    
    this.questionReq ={
      id: 0,
      text: '',
      type: '',
      subject_id: 0,
      level_id: 0,
      media_id: 0
    }
    
    
    this.step+=1
  }
  getLevels(page:number){
    this.levelService.getLevels(page).subscribe(
      data => {
        this.levels = data.content
        console.log(data.content);
        
        this.totalPages = data.totalPages
      }
    )
  }
  selectMedia(media: any) {
    this.selectedMedia = media;
    this.questionReq.media_id = media.id
  }
  getMedias(page:number){
    this.MediaService.getMedias(page).subscribe(  
      data => {
        this.Medias = data.content
        this.totalPages = data.totalPages
      }
    )
  }
  getSubjects(page:number){
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
  getAnswers(page:number){
    this.AnswerService.getAnswers(page).subscribe(
      data => {
        this.Answers = data.content
        this.totalPages = data.totalPages
      }
    )
  }

  findSubject(){
    console.log(this.searchTerm);
    
    this.SubjectService.getSubjectByTitle(this.searchTerm).subscribe(
    data => {
      console.log(data.content)
      // this.SubjectBytitle = data.content
    }
    )
  }
  ngOnInit(): void {
    this.getLevels(this.page)
    this.getMedias(this.page)
    this.getSubjects(this.page)
    this.getAnswers(this.page)
  }

  constructor(public Question : QuestionService, public levelService : LevelService ,
     public MediaService : MediaService , public SubjectService : SubjectService, public AnswerService : AnswerService){}
}
