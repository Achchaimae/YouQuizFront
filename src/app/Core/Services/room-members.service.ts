import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomMembersService {

  
  constructor(private http : HttpClient) { }
  private url ='http://localhost:8080/room/members'

  getAllRoomMember(page: number) :  Observable<any>{
    return this.http.get(this.url + '?size=8&page=' + page);
  }
  getRoomMember(id:any) : Observable<any>{
    return this.http.get(this.url + '/' +id);
  }
  saveRoomMember(data:any) : Observable<any>{
    return this.http.post(this.url , data );
  }
  
  deleteRoomMember(id:any): Observable<any>{
    return this.http.delete(this.url + '/delete/' + id)
  }
}
