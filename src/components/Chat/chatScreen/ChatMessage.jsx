import React, { useEffect, useState } from 'react'
import { decription } from '../../../_utils/cryptography';
import { getFileFromFireStorage } from '../../../_utils/firebase';

const ChatMessage = ({ message, currentChaterId, userId }) => {
    const [finalMessage, setFinalMessage] = useState("");
    const [file, setFile] = useState("");
    // const 

    useEffect(() => {
        decription(message.content).then((content) => {

            if (message && message.type !== 1) {
                getFileFromFireStorage(content)
                    .then((filePath) => {
                        // console.log(filePath)
                        setFile(filePath)
                    }).catch((error) => {
                        // console.error(error);
                        setFile("")
                    });
            }
            else if (message && message.type == 1) {
                setFinalMessage(content);
            }
            else
                setFinalMessage("")
        })
    }, []);
    // console.log(message)
    return (
        <>
            {(message.fromId === currentChaterId && message.toId === userId) &&
                (
                    <div className="message-box friend-message">

                        <p>
                            {(message && message.type !== 1) ?
                                <img src={file} />
                                :
                                 finalMessage 
                            }

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
                            {(message && message.type !== 1) ?
                                <img src={file} />
                                :
                                 finalMessage 
                            }

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