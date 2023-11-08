import React from 'react'

const ChatMessage = ({ message, currentChaterId, userId }) => {
    return (
        <>
            {(message.fromId === currentChaterId && message.toId === userId) &&
                (
                    <div className="message-box friend-message">
                        <p>
                            {message.content}
                            {/* I've been waiting to watch it!! */}
                            <br />
                            <span>07:45</span>
                            {/* <span>07:45</span> */}
                        </p>
                    </div>
                )
            }
            {(message.fromId === userId && message.toId === currentChaterId) &&
                (
                    <div className="message-box my-message">
                        <p>
                            {message.content}
                            {/* 😐😐😐 */}
                            <br />
                            <span>07:46</span>
                            {/* <span>07:46</span> */}
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default ChatMessage