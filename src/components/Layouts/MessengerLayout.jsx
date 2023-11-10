// MainLayout.js
import React from "react";
import { Toaster } from "react-hot-toast";
import VideoCallContext from "../../_contexts/VideoCallContext";
import { toastConfig } from "../../_utils/"
const MessengerLayout = ({ children }) => (
  <>
    <VideoCallContext>
      <>{children}</>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{ ...toastConfig }}
      />
    </VideoCallContext>
  </>
);

export default MessengerLayout;
