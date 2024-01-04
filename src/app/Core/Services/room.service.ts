import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080/rooms'

  getAllRooms(page: number) :  Observable<any>{
    return this.http.get(this.url + '?size=8&page=' + page);
  }
  getRoom(id:any) : Observable<any>{
    return this.http.get(this.url + '/' +id);
  }
  saveRoom(data:any) : Observable<any>{
    return this.http.post(this.url , data );
  }
  updateRoom(id: any, data: any): Observable<any> {
    return this.http.put(this.url + '/' + id, data);
  }
  deleteRoom(id:any): Observable<any>{
    return this.http.delete(this.url + '/delete/' + id)
  }
}
