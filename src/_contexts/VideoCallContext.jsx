/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import toast from "react-hot-toast";
import {
  createMicrophoneAudioTrack,
  createCameraVideoTrack,
  errors,
  success,
  infos,
} from "../_utils";
import { layout } from 'agora-react-uikit'
import { useUnMount } from "../_hooks";
import { nanoid } from "nanoid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { joinMeeting } from "../_services";
export const VideoCallContext = createContext();
export default function VideoCallProvider({ children }) {
  const {uid, name} = useSelector(state => state.user)
  const navigate = useNavigate();
  const Alert = withReactContent(Swal);
  const APP_ID = "fe59ad8be52e430eaacc2da8f60d3cac";
  const TOKEN = null;
  let [queryString, setQueryString] = useSearchParams();
  const [meetingStep, setMeetingStep] = useState(1);
  const [joined, setJoined] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [isSharedMeeting, setIsSharedMeeting] = useState(false);
  const sharedMeetingName = queryString.get("meeting");
  const [rtcProps, setRtcProps] = useState({});
  const [rtmProps, setRtmProps] = useState({});
  const handelMeetingStep = (value) => {
    setMeetingStep(value);
  };
  const initMeeting = async () => {
    try {
      const res = await joinMeeting(meetingName,
        {
        "inMeetingRoom":true,
        // "joinId":3075173654,
        "muteCamera":true,
        "muteSpeaker":true,
        "profileName":name,
        "uid":uid
        }
        )
        // console.log("---------------------------------------------res",res);
      setRtcProps({
        appId: APP_ID,
        channel: meetingName,
        token: TOKEN,
        role: 'host',
        // role: res.userRole || 'host',
        layout: layout.grid,
        enableScreensharing: true
      })
      setRtmProps({ username: name, displayUsername: true })
      setJoined(true)
    } catch (error) {
      console.log("Error: initMeeting", error);
      navigate("/chat")
    }
  };
  const getMeetingURL = () => {
    const href = window.location.origin;
    const url = `${href}/meeting?meeting=${meetingName}`;
    const node = (
      <span>
        You can invite others to join this meeting by sharing the URL below.{" "}
        <a href={url} target="_blank" rel="noreferrer">
          here
        </a>
      </span>
    );
    return { node, url };
  };
  const handelJoinMeetingAsHost = () => {
    handelMeetingStep(3);
    setQueryString({ meeting: meetingName });
  };
  const handelLeaveMeeting = async () => {
    setJoined(false)
    window.location.href = '/chat'
  };

  useEffect(() => {
    if (sharedMeetingName) {
      setMeetingName(sharedMeetingName);
      setIsSharedMeeting(true);
    }
  }, []);
  useUnMount(() => {
    if (joined) {
      handelLeaveMeeting();
    }
  });
  useEffect(() => {
    if (meetingName && isSharedMeeting) {
      handelMeetingStep(3);
    } else if (meetingName && !isSharedMeeting) {
      toast.success(success.meetingCreated.title)
      handelMeetingStep(2);
    } else {
      handelMeetingStep(1);
    }
  }, [meetingName, setMeetingStep]);
  useEffect(() => {
    if (meetingStep === 3) {
      initMeeting();
    }
  }, [meetingStep]);

  return (
    <VideoCallContext.Provider
      value={{
        joined,
        meetingName,
        meetingStep,
        setMeetingName,
        setIsSharedMeeting,
        getMeetingURL,
        handelMeetingStep,
        sharedMeetingName,
        handelJoinMeetingAsHost,
        handelLeaveMeeting,
        rtcProps,
        rtmProps
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
}
export const useVideoCallContext = () => useContext(VideoCallContext);