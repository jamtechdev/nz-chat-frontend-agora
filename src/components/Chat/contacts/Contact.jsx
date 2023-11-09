import React from 'react'
import { convertTimestamp } from '../../../_utils/helper'
import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../../../redux/actions/user';

const Contact = ({ userId, userDetails, latestMessage }) => {
    const dispatch = useDispatch();
    
    const openUserChat = (userId, userDetails) => {
        let currentChatObj = {
            userId : userId,
            name : userDetails.name,
            photo : userDetails.photo,
            userType : "user"
        }
        dispatch(setCurrentChat(currentChatObj));
    };
    
    return (
        <div className="chat-box" onClick={() => openUserChat(userId, userDetails)}>
            <div className="img-box">
                <img
                    className="img-cover"
                    src={userDetails.photo}
                    alt=""
                />
            </div>
            <div className="chat-details">
                <div className="text-head">
                    <h4>{userDetails.name}</h4>
                    {/* <p className="time unread">11:49</p> */}
                    <p className="time unread">{convertTimestamp(latestMessage.timestamp)}</p>
                </div>
                <div className="text-message">
                    {/* <p>“How are you?”</p>
                    <b>1</b> */}
                </div>
            </div>
        </div>
    )
}

export default Contact