import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  
  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080/api'

  getValidations(page:number): Observable<any>{
    return this.http.get(this.url+ '/validation?size=8&page='+ page);
  }
  saveValidation(data :any) : Observable<any>{
    return   this.http.post(this.url + '/validation', data );
  }
}
