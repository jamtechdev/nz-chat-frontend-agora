import React from 'react'
import { useSelector } from 'react-redux'

const ChatHeader = () => {
    const { uid, name, photo, userType } = useSelector(state => state.currentChat)
    return (
        <div className="header">
            <div className="img-text">
                <div className="user-img">
                    <img
                        className="dp"
                        src={photo}
                        alt=""
                    />
                </div>
                <h4>
                    {name}
                    {/* Leo */}
                    <br />
                    <span>Online</span>
                </h4>
            </div>
            <ul className="nav-icons">
                {/* <li>
                    <i className={`ri-vidicon-line ${isVideoCallActive ? 'video-call-active' : ''}`} onClick={() => { handelStartVideoCall() }}></i>
                </li>
                <li>
                    <i className={`ri-broadcast-line ${isBroadcastActive ? 'video-call-active' : ''}`} onClick={() => { handelStartBroadcastCall() }}></i>
                </li> */}
                <li>
                    <i className="ri-phone-line"></i>
                </li>
                <li>
                    <i className="ri-more-2-fill"></i>
                </li>
            </ul>
        </div>
    )
}

export default ChatHeader