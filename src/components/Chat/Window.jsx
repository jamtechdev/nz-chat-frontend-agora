// import React, { useState, useEffect } from 'react';
// import { useVideoCallContext } from './../../context/VideoCallContext';
// import FullScreenVideoContainer from './FullScreenVideoContainer';
// import { generateNumericUID } from '../../_utils/helpers';
// import PropsContext, {
//     PropsProvider,
//     PropsInterface,
//     layout
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuthenticated } from '../../redux/actions/user.js';
import Contact from './contacts/Contact.jsx';
import { getContacts, getSessionInfo } from '../../_utils/firebase.js';
import ContactsList from './contacts/ContactsList.jsx';

// } from './../../context/agora/PropsContext';
const Window = () => {
    // const navigate = useNavigate();
    const identifier = localStorage.getItem("sessionIdentifier");
    const dispatch = useDispatch();
    const { uid, name, photo, status } = useSelector(state => state.user);
    // const {
    //     isBroadcastActive,
    //     isVideoCallActive,
    //     userName,
    //     isPinned,
    //     isHost,
    //     handelStartVideoCall,
    //     handelEndVideoCall,
    //     handelStartBroadcastCall
    // } = useVideoCallContext();
    // const videoCallProps = {
    //     rtcProps: {
    //         appId: '0a34f37fd8b14cd99fb8393177faa313',
    //         channel: 'rtmtest',
    //         token: null, // add your token if using the app in secured mode
    //         layout: 0,
    //         enableScreensharing: isHost ? true : true,
    //         disableRtm: false,
    //         uid: generateNumericUID(9)
    //     },
    //     rtmProps: {
    //         username: userName || 'user',
    //         displayUsername: true

    //     },
    //     callbacks: {
    //         EndCall: () => handelEndVideoCall(),


    //     }
    // };
    // const broadcastCallProps = {
    //     rtcProps: {
    //         appId: '0a34f37fd8b14cd99fb8393177faa313',
    //         channel: 'rtmtest',
    //         token: null, // add your token if using the app in secured mode
    //         layout: 0,
    //         role: isHost ? 'host' : 'host',
    //         enableScreensharing: false,
    //         disableRtm: false,
    //         uid: generateNumericUID(9)
    //     },
    //     rtmProps: {
    //         username: 'joe' || 'user',
    //         displayUsername: true

    //     },
    //     callbacks: {
    //         EndCall: () => handelEndVideoCall(),


    //     }
    // };

    useEffect(() => {
        // dispatch(getAuthenticated(identifier))
        // if(identifier)
        // axios.get("http://localhost:9000/api/users/getAuthenticatedUser", {
        //     params: {
        //         identifier: identifier,
        //     }
        // })
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         localStorage.clear()
        //         navigate('/nz-chat-web');
        //         console.error(error);
        //     });
        // getSessionInfo("-NiZViI3GpnUynHaKUBQ", (info) => { console.log(info) });
        // getContacts(uid)
        //     .then((contacts) => {
        //         console.log(contacts);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }, [])

    return (<>
        {/* <PropsProvider value={isBroadcastActive ? broadcastCallProps : videoCallProps}> */}
        <div className="main-container" id="chat__wrapper">

            <div className="left-container">
                <div className="header">
                    <div className="user-img">
                        <img
                            className="dp"
                            src={photo}
                            // src="https://www.codewithfaraz.com/InstaPic.png"
                            alt=""
                        />
                    </div>
                    <ul className="nav-icons">
                        <li>
                            <i className="ri-team-fill"></i>
                        </li>
                        <li>
                            <i className="ri-more-2-fill"></i>
                        </li>
                    </ul>
                </div>

                <div className="search-container">
                    <div className="input">
                        <i className="ri-search-line"></i>
                        <input type="text" placeholder="Search or start new chat" />
                    </div>
                </div>
                <ContactsList/>
                {/* <div className="chat-list">
                    <Contact />
                </div> */}

                {/* <div className="chat-list">
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://lh5.googleusercontent.com/-7ssjf_mDE1Q/AAAAAAAAAAI/AAAAAAAAASo/tioYx2oklWEHoo5nAEyCT-KeLxYqE5PuQCLcDEAE/s100-c-k-no-mo/photo.jpg"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Nowfal</h4>
                                <p className="time unread">11:49</p>
                            </div>
                            <div className="text-message">
                                <p>“How are you?”</p>
                                <b>1</b>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Rohan</h4>
                                <p className="time unread">10:49</p>
                            </div>
                            <div className="text-message">
                                <p>“I’ll be there.”</p>
                                <b>4</b>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Zoya</h4>
                                <p className="time unread">09:49</p>
                            </div>
                            <div className="text-message">
                                <p>“Make somebody’s day.”</p>
                                <b>2</b>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Ava</h4>
                                <p className="time">08:49</p>
                            </div>
                            <div className="text-message">
                                <p>“Dreams come true.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box active">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Leo</h4>
                                <p className="time">07:49</p>
                            </div>
                            <div className="text-message">
                                <p>Awesome! I'll start a vid..</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/3564412/pexels-photo-3564412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Azariah</h4>
                                <p className="time">06:49</p>
                            </div>
                            <div className="text-message">
                                <p>“Love, light, laughter.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/2919367/pexels-photo-2919367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Oliver</h4>
                                <p className="time unread">Yesterday</p>
                            </div>
                            <div className="text-message">
                                <p>“Appreciate the mome..”</p>
                                <b>2</b>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/14526673/pexels-photo-14526673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Jeslin</h4>
                                <p className="time">Yesterday</p>
                            </div>
                            <div className="text-message">
                                <p>“Now or never.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Zoya</h4>
                                <p className="time unread">09:49</p>
                            </div>
                            <div className="text-message">
                                <p>“Make somebody’s day.”</p>
                                <b>2</b>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Leo</h4>
                                <p className="time">07:49</p>
                            </div>
                            <div className="text-message">
                                <p>Awesome! I'll start a vid..</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/3564412/pexels-photo-3564412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Azariah</h4>
                                <p className="time">06:49</p>
                            </div>
                            <div className="text-message">
                                <p>“Love, light, laughter.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Ava</h4>
                                <p className="time">08:49</p>
                            </div>
                            <div className="text-message">
                                <p>“Dreams come true.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Leo</h4>
                                <p className="time">07:49</p>
                            </div>
                            <div className="text-message">
                                <p>Awesome! I'll start a vid..</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="img-box">
                            <img
                                className="img-cover"
                                src="https://images.pexels.com/photos/3564412/pexels-photo-3564412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <div className="chat-details">
                            <div className="text-head">
                                <h4>Azariah</h4>
                                <p className="time">06:49</p>
                            </div>
                            <div className="text-message">
                                <p>“Love, light, laughter.”</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="chat-bottom">
                    <img className="app-logo" src="images/app_logo.png" alt="" />{" "}
                    <p>@ 2023 Nzchat App. All rights reserved</p>
                </div>
            </div>

            <div className="right-container">
                <div className="header">
                    <div className="img-text">
                        <div className="user-img">
                            <img
                                className="dp"
                                src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                        <h4>
                            Leo
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

                <div className="chat-container">
                    <div className="message-box my-message">
                        <p>
                            I've been waiting to see that show asap!
                            <br />
                            <span>07:43</span>
                        </p>
                    </div>
                    <div className="message-box friend-message">
                        <p>
                            Ahh, I can't believe you do too!
                            <br />
                            <span>07:45</span>
                        </p>
                    </div>
                    <div className="message-box friend-message">
                        <p>
                            The trailer looks good
                            <br />
                            <span>07:45</span>
                        </p>
                    </div>
                    <div className="message-box friend-message">
                        <p>
                            I've been waiting to watch it!!
                            <br />
                            <span>07:45</span>
                        </p>
                    </div>
                    <div className="message-box my-message">
                        <p>
                            😐😐😐
                            <br />
                            <span>07:46</span>
                        </p>
                    </div>
                    <div className="message-box my-message">
                        <p>
                            Mee too! 😊
                            <br />
                            <span>07:46</span>
                        </p>
                    </div>
                    <div className="message-box friend-message">
                        <p>
                            We should video chat to discuss, if you're up for it!
                            <br />
                            <span>07:48</span>
                        </p>
                    </div>
                    <div className="message-box my-message">
                        <p>
                            Sure
                            <br />
                            <span>07:48</span>
                        </p>
                    </div>
                    <div className="message-box my-message">
                        <p>
                            I'm free now!
                            <br />
                            <span>07:48</span>
                        </p>
                    </div>
                    <div className="message-box friend-message">
                        <p>
                            Awesome! I'll start a video chat with you in a few.
                            <br />
                            <span>07:49</span>
                        </p>
                    </div>
                </div>

                <div className="chatbox-input">
                    <i className="ri-user-smile-line"></i>
                    <i className="ri-attachment-line"></i>
                    <input type="text" placeholder="Type a message" />
                    <i className="ri-send-plane-fill"></i>
                </div>
            </div>

        </div>
        {/* {isVideoCallActive ? (<FullScreenVideoContainer rtcProps={videoCallProps.rtcProps} rtmProps={videoCallProps.rtmProps} callbacks={videoCallProps.callbacks} />) : (<FullScreenVideoContainer rtcProps={broadcastCallProps.rtcProps} rtmProps={broadcastCallProps.rtmProps} callbacks={broadcastCallProps.callbacks} />)}
        </PropsProvider> */}
    </>)
};

export default Window;
