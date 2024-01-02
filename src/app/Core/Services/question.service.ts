import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080'


  getQuestions(page:number) : Observable<any>{
    return this.http.get(this.url + '/question?size=4&page=' + page);
  }
  deleteQuestion(id:any): Observable<any>{
    return this.http.delete(this.url + '/question/delete/' + id)
  }
  addQuestion(data:any): Observable<any>{
    return this.http.post(this.url + '/question' , data)
  }
  
}
