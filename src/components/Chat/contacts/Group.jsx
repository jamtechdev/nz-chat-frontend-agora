import React from 'react'
import { convertTimestamp } from '../../../_utils/helper'
import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../../../redux/actions/user';

const Group = ({groupId, groupDetails}) => {
    // console.log(convertTimestamp(latestMessage.timestamp))
    const dispatch = useDispatch();
    
    const openGroupChat = (groupId, groupDetails) => {
        let currentChatObj = {
            userId : groupId,
            name : groupDetails.name,
            photo : groupDetails?.photo,
            userType : "group"
        }
        // console.log(currentChatObj)
        dispatch(setCurrentChat(currentChatObj));
    };
    return (
        <div className="chat-box"  onClick={() => openGroupChat(groupId, groupDetails)}>
            <div className="img-box">
                <img
                    className="img-cover"
                    src={groupDetails?.photo} 
                    alt=""
                />
            </div>
            <div className="chat-details">
                <div className="text-head">
                    <h4>{groupDetails.name}</h4>
                    <p className="time unread">11:49</p>
                    {/* <p className="time unread">{convertTimestamp(latestMessage.timestamp)}</p> */}
                </div>
                <div className="text-message">
                    {/* <p>“How are you?”</p>
                    <b>1</b> */}
                </div>
            </div>
        </div>
    )
}

export default Group