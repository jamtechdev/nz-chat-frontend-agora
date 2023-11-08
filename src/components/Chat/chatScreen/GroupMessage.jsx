import React from 'react'

const GroupMessage = ({ message, userId }) => {
    return (
        <>
            {(message.fromId !== userId) ?
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
            :
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

export default GroupMessage