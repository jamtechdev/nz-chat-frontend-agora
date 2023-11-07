import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../../_utils/firebase';
import Contact from './Contact';

const ContactsList = () => {
    
    const [ userContacts, setUserContacts ] = useState([]);
    const identifier = localStorage.getItem("sessionIdentifier");
    const dispatch = useDispatch();
    const { uid, name, photo, status } = useSelector(state => state.user);
    useEffect(() => {
        // getSessionInfo("-NiZViI3GpnUynHaKUBQ", (info) => { console.log(info) });
        getContacts(uid)
            .then((contacts) => {
                // console.log(contacts);
                setUserContacts([...contacts]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div className="chat-list">
            {console.log(userContacts)}
            {userContacts.map((contact) =>(
                <Fragment key={contact.userId}>
                <Contact userId={contact.userId} userDetails={contact.userDetails}/>
                </Fragment>
            ))}
            {/* <Contact /> */}
        </div>
    )
}

export default ContactsList