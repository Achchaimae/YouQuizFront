import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080'

  getTrainers(page:number) : Observable<any>{
    return this.http.get(this.url+ '/trainer?size=8&page=' +page)
  }

  saveTrainer(data: any) : Observable<any>{
    return this.http.post(this.url+ '/trainer', data)
  }
  deleteTrainer(id:any) : Observable<any>{
    return this.http.delete(this.url + '/trainer/delete/' + id)
  }
  updateTrainer(id:any , data :any) : Observable<any>{
    return this.http.put(this.url+ '/trainer/' +  id , data)
  }
}

