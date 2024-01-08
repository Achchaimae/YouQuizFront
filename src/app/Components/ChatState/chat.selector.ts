import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from './chat.reducer';

// Create a feature selector to select the chat state
export const selectChatState = createFeatureSelector<ChatState>('chat');

// Create a selector to get the chat messages
export const selectChatMessages = createSelector(
  selectChatState,
  (state) => state.messages
);
