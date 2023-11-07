// WebSocketContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { webSocketServer } from "../config/config";

const WebSocketContext = createContext();

export function WebSocketProvider({ children }) {
  const [webSocket, setWebSocket] = useState(null);


  const setSocketConnection = () => {
    // const ws = new WebSocket(`wss://47.128.83.81/api`);
    // const ws = new WebSocket(`ws://localhost:9000`);
    const ws = new WebSocket(`${webSocketServer}`);
    setWebSocket(ws);
  }
  const disconnectSocket = () => {
    webSocket.close();
  };


  return (
    <WebSocketContext.Provider value={{ webSocket, disconnectSocket, setSocketConnection }}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  return useContext(WebSocketContext);
}
