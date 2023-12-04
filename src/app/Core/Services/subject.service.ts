import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080/api'

  getSubjects(page:number): Observable<any>{
    return this.http.get(this.url+ '/subject?size=8&page='+ page);
  }

  deleteSubject(id: any): Observable<any> {
    return this.http.delete(this.url + '/subject/' + id);
  }
  addSubject(data: any): Observable<any> {
    return   this.http.post(this.url + '/subject', data );
  }
  updateSubject(id: any, data: any): Observable<any> {
    return this.http.put(this.url + '/subject/' + id, data);
  }
  getSubject(id: any): Observable<any> {
    return this.http.get(this.url + '/subject/' + id);
  }
  getSubjectByTitle(title :any) : Observable<any>{
    return this.http.get(this.url + '/subject/title/' + title )
  }
}
