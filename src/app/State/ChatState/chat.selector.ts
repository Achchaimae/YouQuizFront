import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from './chat.reducer';

// Create a feature selector to select the chat state
export const selectChatState = createFeatureSelector<ChatState>('chat');

// elector to get the chat messages
export const selectChatMessages = createSelector(
  selectChatState,
  (state) => state.messages
);

export function getMessagesForRoom(roomId: number): (state: object) => import("../../Core/Models/ChatMessageReq.model").ChatMessageReq[] {
  throw new Error('Function not implemented.');
}
