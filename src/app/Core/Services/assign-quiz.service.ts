import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignQuizService {

  constructor(private http: HttpClient) {} 
    private url ='http://localhost:8080/assignQuizz'

  getAssigns(): Observable<any>{
    return this.http.get(this.url);
  }
  getAssigned(id:any) : Observable<any>{
    return this.http.get(this.url +'/student/'+ id);
  }
  
  saveAssignement(data : any[]): Observable<any>{
    return this.http.post(this.url, data );
  }



}
