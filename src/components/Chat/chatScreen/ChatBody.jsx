import React, { Fragment, useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useSelector } from 'react-redux';
import { getGroupMessages, getMessages } from '../../../_utils/firebase';
import GroupMessage from './GroupMessage';

const ChatBody = () => {

    const { uid } = useSelector(state => state.user);
    const { uid: currentChaterId, userType } = useSelector(state => state.currentChat)
    const [messages, setMessages] = useState([])

    const getAllMessages = async (userId, currentChaterId) => {
        try {
            // console.log('getMessages', userId, currentChaterId)
            let data = await getMessages(userId, currentChaterId)
            setMessages(data)
            // console.log("........data", data)
        } catch (error) {
            throw error
        }
    }

    const getAllGroupMessages = async (currentChaterId)=>{
        try {
            // console.log('getMessages', userId, currentChaterId)
            let data = await getGroupMessages(currentChaterId)
            setMessages(data)
            // console.log("........data", data)
        } catch (error) {
            throw error
        }
    }

    // console.log("........data")
    useEffect(() => {
        if(userType === 'user'){
            getAllMessages(uid, currentChaterId)
        }
        else if(userType === 'group'){
            getAllGroupMessages(currentChaterId)
        }
    }, [uid, currentChaterId])
    return (
        <>
            <div className="chat-container">

                {userType === 'user' && messages.map((message, index) => {
                    return (
                        <Fragment key={index}>
                            <ChatMessage message={message} userId={uid} currentChaterId={currentChaterId} />
                        </Fragment>
                    )
                })}
                {userType === 'group' && messages.map((message, index) => {
                    return (
                        <Fragment key={index}>
                            <GroupMessage message={message} userId={uid} />
                        </Fragment>
                    )
                })}
                {/* <ChatMessage/> */}
                {/* <div className="message-box my-message">
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
                </div> */}
            </div>

            <div className="chatbox-input">
                <i className="ri-user-smile-line"></i>
                <i className="ri-attachment-line"></i>
                <input type="text" placeholder="Type a message" />
                <i className="ri-send-plane-fill"></i>
            </div>
        </>
    )
}

export default ChatBody