import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(private http: HttpClient) {} 
    private url ='http://localhost:8080'

  getLevels(page:number): Observable<any>{
    return this.http.get(this.url+ '/level?size=8&page='+ page);
  }
  deleteLevel(id: any): Observable<any> {
    return this.http.delete(this.url + '/level/' + id);
  }
  addLevel(data : any): Observable<any>{
    return   this.http.post(this.url + '/level', data );
  }
  updateLevel(id: any, data: any): Observable<any> {
    return this.http.put(this.url + '/level/' + id, data);
  }
  getLevel(id: any): Observable<any> {
    return this.http.get(this.url + '/level/' + id);
  }
  
}
