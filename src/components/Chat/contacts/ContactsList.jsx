import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getGroups } from '../../../_utils/firebase';
import Contact from './Contact';
import Group from './Group';

const ContactsList = () => {

    const [userContacts, setUserContacts] = useState([]);
    const [userGroups, setUserGroups] = useState([]);
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
        getGroups("lXfgLgt6zMZkwX6c3aLC4eg9cuL2")
            .then((groups) => {
                // console.log(groups);
                setUserGroups([...groups]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }, []);

    return (
        <div className="chat-list">
            {/* {console.log(userContacts)} */}
            {userContacts.map((contact) => (
                <Fragment key={contact.userId} >
                    <Contact
                        userId={contact.userId}
                        userDetails={contact.userDetails}
                        latestMessage={contact.latestMessage}
                    />
                </Fragment>
            ))}
            {userGroups.map((group) => (
                <Fragment key={group.key}>
                    <Group
                        groupId={group.key}
                        groupDetails={group.info}
                    />
                </Fragment>
            ))}
            {/* <Contact /> */}
        </div>
    )
}

export default ContactsList