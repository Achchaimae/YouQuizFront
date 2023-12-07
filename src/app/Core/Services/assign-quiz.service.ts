import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignQuizService {

  constructor(private http: HttpClient) {} 
    private url ='http://localhost:8080'

  getAssigns(): Observable<any>{
    return this.http.get(this.url+ '/assignQuizz');
  }
}
