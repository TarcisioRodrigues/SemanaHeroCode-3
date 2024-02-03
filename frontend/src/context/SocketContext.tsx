'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

interface ISocketContext {
  socket: Socket | null;
}
export const SocketContext = createContext({} as ISocketContext);

export function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3333/streams`, {
      transports: ['websocket'],
    });
    setSocket(newSocket);
  }, []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}