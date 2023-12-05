import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080'

  getStudents(page:number) : Observable<any>{
    return this.http.get(this.url+ '/student?size=8&page=' +page)
  }

  saveStudent(data: any) : Observable<any>{
    return this.http.post(this.url+ '/student', data)
  }
  deleteStudent(id:any) : Observable<any>{
    return this.http.delete(this.url + '/student/delete/' + id)
  }
  updateStudent(id:any , data :any) : Observable<any>{
    return this.http.put(this.url+ '/student/' +  id , data)
  }
}
