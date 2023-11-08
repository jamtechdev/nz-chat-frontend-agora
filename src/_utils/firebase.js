
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { getDatabase, child, onValue } from "firebase/database";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { ref, query, orderByChild, startAt, endAt, get , equalTo} from "firebase/database";
import { firebaseConfig } from "../config/config";
import { getStorage, getDownloadURL } from "firebase/storage";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
// auth.signOut();


const database = getDatabase(app);


export const authenticateFirebase = async (token) => {
    await signInWithCustomToken(auth, token)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(auth);
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            throw error
        });
}


export const getUsers = async (userId) => {
    try {
        const userRef = ref(database, `users/${userId}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
            // console.log(snapshot.val());
            return snapshot.val();
        } else {
            console.log('---------------------------No data available');
            return null;
        }
    } catch (error) {
        console.error('---------------------------Error:', error);
        throw error;
    }
}





// export const getContacts = async (userId) => {
//     try {
//       const messagesRef = ref(database, "messages");
  
//       const snapshot = await get(messagesRef);
  
//       const contacts = [];
  
//       if (snapshot.exists()) {
//         snapshot.forEach((childSnapshot) => {
//           const message = childSnapshot.val();
  
//           if (message.toId === userId || message.fromId === userId) {
//             // Determine the contact's ID (the other user in the conversation)
//             const contactId = message.toId === userId ? message.fromId : message.toId;
  
//             // Check if the contactId is not already in the contacts list
//             if (!contacts.some((contact) => contact.userId === contactId)) {
//               contacts.push({ userId: contactId });
//             }
//           }
//         });
  
//         // Fetch user details for each contact
//         const contactPromises = contacts.map(async (contact) => {
//           const userRef = ref(database, `users/${contact.userId}`);
//           const userSnapshot = await get(userRef);
//           if (userSnapshot.exists()) {
//             contact.userDetails = userSnapshot.val();
//           }
//           return contact;
//         });
  
//         await Promise.all(contactPromises);
//       } else {
//         console.log('No data available');
//       }
  
//       return contacts;
//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   };
  




export const getContacts = async (userId) => {
  try {
    const messagesRef = ref(database, "messages");
    const snapshot = await get(messagesRef);

    const contacts = [];

    if (snapshot.exists()) {
      const latestMessages = new Map(); // Map to store the latest message for each contact

      snapshot.forEach((childSnapshot) => {
        const message = childSnapshot.val();

        if (message.toId === userId || message.fromId === userId) {
          const contactId = message.toId === userId ? message.fromId : message.toId;

          if (!contacts.some((contact) => contact.userId === contactId)) {
            contacts.push({ userId: contactId });
          }

          // Check if this message is the latest for the contact
          if (
            !latestMessages.has(contactId) ||
            message.timestamp > latestMessages.get(contactId).timestamp
          ) {
            latestMessages.set(contactId, { timestamp: message.timestamp, content: message.content });
          }
        }
      });

      // Fetch user details for each contact
      const contactPromises = contacts.map(async (contact) => {
        const userRef = ref(database, `users/${contact.userId}`);
        const userSnapshot = await get(userRef);
        if (userSnapshot.exists()) {
          contact.userDetails = userSnapshot.val();
        }

        // Add the latest message data
        const latestMessage = latestMessages.get(contact.userId);
        if (latestMessage) {
          contact.latestMessage = latestMessage;
        }

        return contact;
      });

      await Promise.all(contactPromises);

      // Sort contacts by the timestamp of the latest message (newest first)
      contacts.sort((a, b) => b.latestMessage.timestamp - a.latestMessage.timestamp);
    } else {
      console.log('No data available');
    }

    return contacts;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const getGroups = async (userId) => {
  try {
    const groupsRef = ref(database, 'groups');
    const groupsSnapshot = await get(groupsRef);
    const groups = [];

    if (groupsSnapshot.exists()) {
      groupsSnapshot.forEach((groupSnapshot) => {
        const groupData = groupSnapshot.val();

        // Check if the user is present in the group
        if (groupData.users && groupData.users[userId] === true) {
          // If the user is present, add the group info and key to the result
          groups.push({ key: groupSnapshot.key, info: groupData.info });
        }
      });
    }

    return groups;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};





// export const getSessionInfo = (sessionId, callback) => {
//     try {
//       const sesRef = ref(database, `webSessions/${sessionId}`);
//       // Subscribe to real-time updates for the specific session
//       const unsubscribe = onValue(sesRef, (snapshot) => {
//         // console.log("Hello")
//         if (snapshot.exists()) {
//           const sessionInfo = snapshot.val();
//         //   console.log("SessionInf..........................",sessionInfo);
//           callback(sessionInfo);
//         } else {
//           callback(null); // Session does not exist
//         }
//       });
  
//       // Return the unsubscribe function so you can stop listening to updates when needed
//       return unsubscribe;
//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   };




// export const getUsers =async (id:string) =>{
//     try {
//         const snapshot = await get(child(db, `users/${id}`))
//         if (snapshot.exists()) {
//           return snapshot.val();
//         } else {
//           console.log("No data available");
//         }
//       } catch (error) {
//         console.log("Error",error)
//       }
// }



export const getMessages = async (userId, currentChaterId) => {
  try {
    const messagesRef = ref(database, "messages");
    const snapshot = await get(messagesRef);

    const messages = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const message = childSnapshot.val();

        // Check if the userId matches toId or fromId, and currentChaterId matches the opposite
        if (
          (message.toId === userId || message.fromId === userId) &&
          ((message.toId === currentChaterId && message.fromId === userId) ||
           (message.toId === userId && message.fromId === currentChaterId))
        ) {
          messages.push(message);
        }
      });

      // Sort messages by timestamp (if needed)
      // messages.sort((a, b) => a.timestamp - b.timestamp);
    } else {
      console.log('No data available');
    }

    return messages;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const getGroupMessages = async (groupId) => {
  try {
    const groupMessagesRef = ref(database, `groupsMessages/${groupId}`);
    const snapshot = await get(groupMessagesRef);

    const groupMessages = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const messageId = childSnapshot.key;
        const messageData = childSnapshot.val();

        // Assuming your messages have a structure like { text: 'Message text', sender: 'Sender ID', timestamp: 'Timestamp' }
        const message = {
          id: messageId,
          ...messageData,
        };

        groupMessages.push(message);
      });

      return groupMessages;
    } else {
      console.log('No data available for this group');
      return [];
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};