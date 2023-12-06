import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempQuizService {

  constructor(private http: HttpClient) {} 
  private url ='http://localhost:8080/api'

  getTempQuizzes(page:number): Observable<any>{
    return this.http.get(this.url+ '/tempQuiz?size=8&page='+ page);
  }
  deleteTempQuiz(id:any): Observable<any>{
    return this.http.delete(this.url + '/tempQuiz/' + id)
  }
   saveTempQuiz(data : any): Observable<any>{
    return   this.http.post(this.url + '/tempQuiz', data );
  }
  updateTempQuiz(id:any ,data:any) : Observable<any>{
    return this.http.put(this.url + '/tempQuiz/' + id , data)
  }
  getTempQuiz(id: any): Observable<any> {
    return this.http.get(this.url + '/tempQuiz/' + id);
  }
}
