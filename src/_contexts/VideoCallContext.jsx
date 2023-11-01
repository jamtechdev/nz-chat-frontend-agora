/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useContext, useEffect } from "react";
import {
  showJoinedMessage,
  createMicrophoneAudioTrack,
  createCameraVideoTrack,
} from "../_utils";
import { useUrlQuery, useUnMount } from "../_hooks";
import {getMeetingURL} from "../_utils";
import { useInformationMessageContext } from "./InformationMessageContext";
import AgoraRTC from "agora-rtc-sdk-ng";
export const VideoCallContext = createContext();
export default function VideoCallProvider({ children }) {
  const APP_ID = "fe59ad8be52e430eaacc2da8f60d3cac";
  const TOKEN = null;
  let client = null;
  let codec = "vp8";
  const [joined, setJoined] = useState(false);
  const [videoTrack, setVideoTrack] = useState(null);
  const [audioTrack, setAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState({});
  const [localUid, setLocalUid] = useState("");
  const [meetingName, setMeetingName] = useState("");
  const { setShowInformationMessage, setInformationMessage } =
    useInformationMessageContext();
  const initTracks = async () => {
    try {
      const tracks = await Promise.all([
        createMicrophoneAudioTrack(),
        createCameraVideoTrack(),
      ]);
      setAudioTrack(tracks[0]);
      setVideoTrack(tracks[1]);
      return tracks;
    } catch (error) {
      throw error;
    }
  };
  const subscribe = async (user, mediaType) => {
    await client.subscribe(user, mediaType);
  };

  const handleUserPublished = async (user, mediaType) => {
    const id = user.uid;
    await subscribe(user, mediaType);
    setRemoteUsers((prev) => ({
      ...prev,
      [id]: user,
    }));
  };
  const handleUserUnpublished = (user, mediaType) => {
    if (mediaType === "video") {
      const id = user.uid;
      setRemoteUsers((pre) => {
        delete pre[id];
        return {
          ...pre,
        };
      });
    }
  };
  const handelJoinMeeting = async () => {
    try {
      client = AgoraRTC.createClient({
        mode: "rtc",
        codec: codec,
      });

      client.on("user-published", handleUserPublished);
      client.on("user-unpublished", handleUserUnpublished);

      let tracks = [audioTrack, videoTrack];
      if (!audioTrack && !videoTrack) {
        tracks = await initTracks();
      }
      // Join a channel
      const uid = await client.join(APP_ID, meetingName, TOKEN, null);
      setLocalUid(uid);
      await client.publish(tracks);
      setInformationMessage({
        title: meetingName,
        message:getMeetingURL({
          appId: APP_ID,
          meeting: meetingName,
          token: TOKEN,
        }),
        type: "joinMeeting",
      });
      setJoined(true);
    setShowInformationMessage(true);
    } catch (error) {
      console.error(error);
    }
  };
  const handelLeaveMeeting = async () => {
    audioTrack?.close();
    setAudioTrack(null);
    videoTrack?.close();
    setVideoTrack(null);
    setRemoteUsers({});
    await client?.leave();
    // leave the channel
    setJoined(false);
    const msg = "client leaves channel success!";
    // message.success(msg);
  };
  useEffect(() => {
    const initMeeting = async () => {
      if (!meetingName) {
        return;
      }
      try {
        let tracks = await initTracks();
        if (tracks) {
          handelJoinMeeting();
        }
      } catch (error) {
        if (
          error.name === "AgoraRTCException" &&
          error.message.includes("PERMISSION_DENIED")
        ) {
          setInformationMessage({
            title: "Permission Denied",
            message:
              "To join the meeting, please grant permission for your camera and microphone.",
            icon: "error",
            isLoader: true,
            type: "normal",
          });
          setShowInformationMessage(true);
        }
      }
    };
    initMeeting();
  }, [meetingName]);
  return (
    <VideoCallContext.Provider
      value={{
        initTracks,
        handelJoinMeeting,
        handelLeaveMeeting,
        setJoined,
        setMeetingName,
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
}
export const useVideoCallContext = () => useContext(VideoCallContext);
