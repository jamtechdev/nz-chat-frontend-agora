import React, { useState } from 'react'
import { decription } from '../../../_utils/cryptography';

const ChatMessage = ({ message, currentChaterId, userId }) => {
    const [finalMessage, setFinalMessage] = useState("")
    decription(message.content).then((content) => {
        setFinalMessage(content);
    })
    // console.log(message)
    return (
        <>
            {(message.fromId === currentChaterId && message.toId === userId) &&
                (
                    <div className="message-box friend-message">

                        <p>
                            <b>{(message && message.fileSize) && "file Hai"}</b>
                            <br />
                            {finalMessage}
                            {/* {message.content} */}
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
                            <b>{(message && message.fileSize) && "file Hai"}</b>
                            <br />
                            {finalMessage}
                            {/* {message.content} */}
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