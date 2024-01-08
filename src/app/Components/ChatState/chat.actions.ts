import { createAction, props } from '@ngrx/store';
import { ChatMessageReq } from 'src/app/Core/Models/ChatMessageReq.model';

export const sendMessage = createAction(
  '[Chat] Send Message',
  props<{ roomId: number; message: ChatMessageReq }>()
);

export const receiveMessage = createAction(
  '[Chat] Receive Message',
  props<{ message: ChatMessageReq }>()
);
