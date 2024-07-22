import { Socket } from 'socket.io';
import { BroadCast } from '../SocketStates';
import {  IGameState } from './Interfaces/IGameStates';

export const broadcastMessage = (socket: Socket, message: string) => {
  socket.broadcast.emit(BroadCast.Messages, message);
};

export const broadcastGameState = (socket: Socket, gameState: IGameState) => {
  socket.broadcast.emit('gameState', gameState);
};

export const broadcastPopUp = (socket: Socket, gameState: any) => {
    socket.broadcast.emit('gameState', gameState);
  };

// Add more broadcast functions as needed
