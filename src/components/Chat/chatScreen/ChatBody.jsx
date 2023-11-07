import React from 'react'
import ChatMessage from './ChatMessage'

const ChatBody = () => {
  return (
    <>
    <div className="chat-container">
        <ChatMessage/>
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