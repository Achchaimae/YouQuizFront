import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from 'src/app/Core/Models/Chat-message.model';
import { ChatService } from 'src/app/Core/Services/chat.service';

@Component({
  selector: 'app-messaging-student',
  templateUrl: './messaging-student.component.html',
  styleUrls: ['./messaging-student.component.css']
})
export class MessagingStudentComponent {

  messageInput : String = "";
  userId : String = "";
  messageList :any[]=[];
    
  constructor(private chatService :ChatService, private route :ActivatedRoute){

  }
  ngOnInit(): void{
    this.userId =this.route.snapshot.params["userId"];
    // this.chatService.joinRoom("ABC");
    this.listenerMessage();
  }

  sendMessage(){
    const chatMessage ={
 
 
      user : this.userId
    }as ChatMessage

    // this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  }

  

  listenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => {
        const message_side = item.user === this.userId ? 'sender' : 'receiver';
        console.log('Message Side:', message_side); // Log the message side for debugging
        return {
          item,
          message_side,
        };
      });
      console.log('Message List:', this.messageList); // Log the entire messageList for debugging
    });
  }
  
}
