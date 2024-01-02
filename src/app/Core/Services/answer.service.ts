import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080/api'

  getAnswers(page:number) : Observable<any>{
    return this.http.get(this.url + '/Answer?size=8&page=' + page);
  }


  getAllAnswers(page:number) : Observable<any>{
    return this.http.get(this.url + '/Answer?page=' + page);
  }
  deleteAnswer(id:any): Observable<any>{
    return this.http.delete(this.url + '/Answer/' + id)
  }
  saveAnswer(data : any): Observable<any>{
    return   this.http.post(this.url + '/Answer', data );
  }

  updateAnswer(id: any, data: any): Observable<any> {
    return this.http.put(this.url + '/Answer/' + id, data);
  }
  getAnswer(id: any): Observable<any> {
    return this.http.get(this.url + '/Answer/' + id);
  }
}
