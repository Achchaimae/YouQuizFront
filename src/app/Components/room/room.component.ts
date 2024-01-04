import { Component } from '@angular/core';
import { RoomReq } from 'src/app/Core/Models/RoomReq.model';
import { RoomService } from 'src/app/Core/Services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {




  rooms :RoomReq[]=[];
  roomId : number = 1;
  constructor(private roomService : RoomService){
  }

  ngOnInit(): void{
    this.getAllRoom();
  }

  getAllRoom()
  {
    this.roomService.getAllRooms(0).subscribe(res => this.rooms = res.content)
  }

  chooseConversation(id:number)
  {
    this.roomId = id
  }
}
