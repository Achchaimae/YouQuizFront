import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssignQuiz } from '../Models/AssignQuiz.model';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080'

  saveAssignement(data : any): Observable<any>{
    return   this.http.post(this.url + '/assignQuizz', data );
  }


}
