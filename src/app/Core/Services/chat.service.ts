// import { Injectable } from '@angular/core';
// import { Stomp } from '@stomp/stompjs';
// import * as SockJS from 'sockjs-client';
// import { ChatMessage } from '../Models/Chat-message.model';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { ChatMessageReq } from '../Models/ChatMessageReq.model';
// import { ChatMessageResp } from '../Models/ChatMessageResp.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatService {
//   private stompClient : any
//   private messageSubject : BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

//   constructor() {
//     this.initConnectionSocket();
//    }

//   initConnectionSocket(){

//     const  url= 'http://localhost:8080/chat-socket'
//     const socket = new SockJS(url);
//     this.stompClient = Stomp.over(socket)
//   }
  
//   joinRoom(roomId :number){
//     this.stompClient.connect({},()=>{
//       this.stompClient.subscribe(`/topic/${roomId}`, (messages: any)=> { 
//         const messageContent = JSON.parse(messages.body);
//         console.log(messageContent);
        
//         const currentMessage =this.messageSubject.getValue();
//         currentMessage.push(messageContent);
//         this.messageSubject.next(currentMessage);
//       })
//     })
//   }

//   sendMessage(roomId:number,ChatMessage: ChatMessageReq){
//     this.stompClient.send(`/app/chat/${roomId}`, {},JSON.stringify(ChatMessage))
//   }



//   getMessageSubject(){
//     return this.messageSubject.asObservable();
//   }
// }

import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ChatMessageReq } from '../Models/ChatMessageReq.model';
import { ChatMessageResp } from '../Models/ChatMessageResp.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any;
  private messageSubject: BehaviorSubject<ChatMessageResp[]> = new BehaviorSubject<ChatMessageResp[]>([]);

  constructor() {
    this.initConnectionSocket();
  }

  initConnectionSocket() {
    const url = 'http://localhost:8080/chat-socket';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: number) {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent: ChatMessageResp = JSON.parse(messages.body);
        const currentMessages = this.messageSubject.getValue();
        currentMessages.push(messageContent);
        this.messageSubject.next(currentMessages);
      });
    });
  }

  sendMessage(roomId: number, chatMessage: ChatMessageReq): Observable<void> {
    return new Observable<void>(observer => {
      if (this.stompClient.connected) {
        this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage));
        observer.next();
        observer.complete();
      } else {
        observer.error('WebSocket is not connected.');
        observer.complete();
      }
    });
  }

  getMessageSubject(): Observable<ChatMessageResp[]> {
    return this.messageSubject.asObservable();
  }
}
