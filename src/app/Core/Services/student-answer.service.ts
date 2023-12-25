import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentAnswerService {

  constructor(private http: HttpClient) {} 
  private url ='http://localhost:8080/api/studentAnswer/'

  getStudentAnswer() : Observable<any> {
    return this.http.get(this.url );
  }

  saveStudentAnswer(assignstudentId :any, validationId : any):  Observable<any> {
    return this.http.post(this.url + assignstudentId + "/"+ validationId,{})
  }
}
