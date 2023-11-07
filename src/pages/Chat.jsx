/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "../styles/chat.css";
import Window from "../components/Chat/Window";
import VideoCallProvider from "../_contexts/VideoCallContext";
const Chat = () => {
  return (
    <>
      {/* <VideoCallProvider> */}
        <Window />
      {/* </VideoCallProvider> */}
    </>
  );
}
export default Chat;