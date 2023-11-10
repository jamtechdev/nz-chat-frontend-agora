/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";

import { useVideoCallContext } from "../../_contexts/VideoCallContext";
import CopyLinks from "../meeting/common/CopyLinks"
const InviteDetails = () => {
  const {getMeetingURL,handelJoinMeetingAsHost} = useVideoCallContext();
  return (
    <>
    <div className="card-wrapper">
      <Card>
        <Card.Body>
          <Card.Title>Share with others</Card.Title>
          <CopyLinks url={getMeetingURL().url}/>
          <Button type="" variant="success" onClick={()=>{handelJoinMeetingAsHost()}}>
              <i className="ri-video-chat-line"></i> {"Start Meeting" }
            </Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};
export default InviteDetails;
