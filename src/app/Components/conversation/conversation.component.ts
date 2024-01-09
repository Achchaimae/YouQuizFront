import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessageReq } from 'src/app/Core/Models/ChatMessageReq.model';
import { ChatMessageResp } from 'src/app/Core/Models/ChatMessageResp.model';
import { RoomResp } from 'src/app/Core/Models/RoomResp.model';
import { ChatService } from 'src/app/Core/Services/chat.service';
import { RoomService } from 'src/app/Core/Services/room.service';
import * as ChatActions from '../ChatState/chat.actions';
import { Store } from '@ngrx/store';
import { selectChatMessages }from '../ChatState/chat.selector';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {


    @Input() roomId : number = 0;
    messageInput : String = "";
    userId : number = 0;
    messageList :ChatMessageResp[]=[];
    room :RoomResp={
      id: 0,
      name: '',
      owner: null,
      messages: []
    };
  
    @ViewChild('scrollContainer', { static: true })
    scrollContainer!: ElementRef;
 
  
    // ngAfterViewInit() {
    //   this.scrollToBottom();
    // }  
    // private scrollToBottom() {
    //   this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    // }
      
    constructor(private chatService :ChatService, private route :ActivatedRoute, private roomService : RoomService,private store: Store){
    }
  
    ngOnInit(): void{
      this.getRoom();
      this.userId =this.route.snapshot.params["id"];
      this.listenerMessage();
      this.chatService.joinRoom(1);
    }
  
    getRoom()
    {
      this.roomService.getRoom(this.roomId).subscribe(res => {
      this.room = res
      })
    }
    
    sendMessage() {
      const chatMessage = {
        content: this.messageInput,
        sender_id: this.userId,
        room_id: 1,
      } as ChatMessageReq;
    
      // Dispatch action to send the message
      this.store.dispatch(ChatActions.sendMessage({ roomId: this.roomId, message: chatMessage }));
      this.messageInput = '';
    }
  
    listenerMessage() {
      this.chatService.getMessageSubject().subscribe((messages: any) => {
        if(messages.length >0 )
        {
          this.room.messages.push(messages[messages.length-1])
        }
        console.log('Message List:', this.room.messages); // Log the entire messageList for debugging
      });
    }
  }
  
