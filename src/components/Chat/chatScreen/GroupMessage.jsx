import React, { useState } from 'react'
import { decription } from '../../../_utils/cryptography'

const GroupMessage = ({ message, userId }) => {
    const [finalMessage, setFinalMessage] = useState("")
    decription(message.content).then((content) => {
        setFinalMessage(content);
    })
    return (
        <>
            {(message.fromId !== userId) ?
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
                :
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

export default GroupMessage