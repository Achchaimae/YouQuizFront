import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) {} 
  private url ='http://localhost:8080/api'
  
  getMedias(page:number): Observable<any>{
    return this.http.get(this.url+ '/media?size=8&page='+ page);
  }
  deleteMedia(id:any): Observable<any>{
    return this.http.delete(this.url + '/media/' + id)
  }
  saveMedia(data : any): Observable<any>{
    return   this.http.post(this.url + '/media', data );
  }
  updateMedia(id:any ,data:any) : Observable<any>{
    return this.http.put(this.url + '/media/' + id , data)
  }
  getMedia(id: any): Observable<any> {
    return this.http.get(this.url + '/media/find/' + id);
  }
}
