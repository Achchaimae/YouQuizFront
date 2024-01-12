import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ChatActions from './chat.actions';
import { ChatService } from 'src/app/Core/Services/chat.service';
import { ChatMessageReq } from 'src/app/Core/Models/ChatMessageReq.model';

@Injectable()
export class ChatEffects {
  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.sendMessage),
      mergeMap(({ roomId, message }) =>
        this.chatService.sendMessage(roomId, message).pipe(
          map(() => message), // Return the original message on success
          map((originalMessage) => ChatActions.receiveMessage({ message: originalMessage })),
          catchError((error) => {
            // Handle error here, you can dispatch an error action if needed
            console.error('Error sending message:', error);
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private chatService: ChatService) {}
}
