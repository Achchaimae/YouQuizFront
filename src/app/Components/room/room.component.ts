import { Component } from '@angular/core';
import { RoomReq } from 'src/app/Core/Models/RoomReq.model';
import { RoomService } from 'src/app/Core/Services/room.service';
import { Store } from '@ngrx/store';
import * as ChatActions from '../ChatState/chat.actions';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {

  rooms: RoomReq[] = [];
  roomId: number = 1;

  constructor(private roomService: RoomService, private store: Store) {}

  ngOnInit(): void {
    this.getAllRoom();
  }

  getAllRoom() {
    this.roomService.getAllRooms(0).subscribe(res => this.rooms = res.content);
  }

  chooseConversation(id: number) {
    this.roomId = id;

    // Optionally, you can prompt the user for input or have dynamic content
    const userInput = prompt('Enter your message:');
    const content = userInput ? userInput : 'Default Message'; // You can customize the default message

    // Create a message object with the required properties
    const messageObject = {
      sender_id: 6, // Assuming sender_id is fixed or retrieved from your authentication
      room_id: id,
      content: content
    };

    // Dispatch action to update the store with the selected room ID and message
    this.store.dispatch(ChatActions.sendMessage({ roomId: id, message: messageObject }));
  }
}
