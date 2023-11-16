/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import CreateMeetingForm from "../components/meeting/MeetingForm";
import { useVideoCallContext } from "../_contexts/VideoCallContext";
import InviteDetails from "../components/meeting/InviteDetails";
import AgoraUIKit, { layout } from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'
const Meeting = () => {
  const {
    meetingStep,
    sharedMeetingName,
    meetingName,
    joined,
    handelLeaveMeeting,
    rtcProps,
    rtmProps
  } = useVideoCallContext();
  console.log(rtcProps)
  // console.log("----------------------------------------------------------joined")
  return (
    <>
      {meetingStep === 1 && !sharedMeetingName && !meetingName && (
        <CreateMeetingForm />
      )}
      {meetingStep === 2 && meetingName && <InviteDetails />}
      {meetingStep === 3 && meetingName && rtcProps && rtmProps && joined && <>
        <div style={styles.container}>
          <AgoraUIKit
            rtcProps={rtcProps}
            rtmProps={rtmProps}
            callbacks={{
              EndCall: () => handelLeaveMeeting(false),
            }}
            styleProps={{backgroundColor: 'black'}}
          />
        </div>
      </>}
    </>
  );
};
const styles = {
  container: { width: '100vw', height: '100vh', display: 'flex', flex: 1},
}
export default Meeting;
