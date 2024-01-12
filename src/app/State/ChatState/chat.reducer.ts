// chat.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ChatActions from './chat.actions';
import { ChatMessageReq } from 'src/app/Core/Models/ChatMessageReq.model';

export interface ChatState {
  messages: ChatMessageReq[]; // Adjust the type to ChatMessageReq
}

export const initialState: ChatState = {
  messages: [],
};

export const chatReducer = createReducer(
  initialState,
  on(ChatActions.sendMessage, (state, { roomId, message }) => ({
    ...state,
    messages: [...state.messages, message],
  })),
  on(ChatActions.receiveMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
  }))
);
