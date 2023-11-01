import React from "react";
import VideoCallProvider from "../_contexts/VideoCallContext";
import CreateMeetingForm from "../components/meeting/CreateMeetingForm";
const CreateMeeting = () => {
  return (
    <>
      <VideoCallProvider>
        <CreateMeetingForm />
      </VideoCallProvider>
    </>
  );
};
export default CreateMeeting;
