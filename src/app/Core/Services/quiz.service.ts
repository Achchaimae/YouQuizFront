import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  
  constructor(private http: HttpClient) {} 
  private url ='http://localhost:8080'

  getQuizzes(page:number): Observable<any>{
    return this.http.get(this.url+ '/quiz?size=8&page='+ page);
  }
  deleteQuiz(id:any): Observable<any>{
    return this.http.delete(this.url + '/quiz/delete/' + id)
  }
  saveQuiz(data : any): Observable<any>{
    return   this.http.post(this.url + '/quiz', data );
  }
  updateQuiz(id:any ,data:any) : Observable<any>{
    return this.http.put(this.url + '/quiz/' + id , data)
  }
  getQuiz(id: any): Observable<any> {
    return this.http.get(this.url + '/quiz/quiz/' + id);
  }
}
