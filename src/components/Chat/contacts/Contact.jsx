import React from 'react'

const Contact = ({userId, userDetails}) => {
    
    return (
        <div className="chat-box">
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
                    <p className="time unread">11:49</p>
                </div>
                <div className="text-message">
                    <p>“How are you?”</p>
                    <b>1</b>
                </div>
            </div>
        </div>
    )
}

export default Contact