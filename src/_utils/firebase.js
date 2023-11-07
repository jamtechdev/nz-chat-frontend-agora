
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { getDatabase, child, onValue } from "firebase/database";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { ref, query, orderByChild, startAt, endAt, get , equalTo} from "firebase/database";
import { firebaseConfig } from "../config/config";


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




// import { ref, query, orderByChild, equalTo, get } from "firebase/database";


export const getContacts = async (userId) => {
    try {
      const messagesRef = ref(database, "messages");
  
      const snapshot = await get(messagesRef);
  
      const contacts = [];
  
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const message = childSnapshot.val();
  
          if (message.toId === userId || message.fromId === userId) {
            // Determine the contact's ID (the other user in the conversation)
            const contactId = message.toId === userId ? message.fromId : message.toId;
  
            // Check if the contactId is not already in the contacts list
            if (!contacts.some((contact) => contact.userId === contactId)) {
              contacts.push({ userId: contactId });
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
          return contact;
        });
  
        await Promise.all(contactPromises);
      } else {
        console.log('No data available');
      }
  
      return contacts;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
// export const getContacts = async (userId) => {
//   try {
//     const messagesRef = ref(database, "messages");

//     const snapshot = await get(messagesRef);

//     const contacts = [];

//     if (snapshot.exists()) {
//       snapshot.forEach((childSnapshot) => {
//         const message = childSnapshot.val();

//         if (message.toId === userId || message.fromId === userId) {
//           // Determine the contact's ID (the other user in the conversation)
//           const contactId = message.toId === userId ? message.fromId : message.toId;

//           // Check if the contactId is not already in the contacts list
//           if (!contacts.some((contact) => contact.userId === contactId)) {
//             contacts.push({ userId: contactId });
//           }
//         }
//       });

//       // Fetch user details for each contact
//       for (const contact of contacts) {
//         const userRef = ref(database, `users/${contact.userId}`);
//         const userSnapshot = await get(userRef);
//         if (userSnapshot.exists()) {
//           contact.userDetails = userSnapshot.val();
//         }
//       }
//     } else {
//       console.log('No data available');
//     }

//     return contacts;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };



export const getSessionInfo = (sessionId, callback) => {
    try {
      const sesRef = ref(database, `webSessions/${sessionId}`);
      // Subscribe to real-time updates for the specific session
      const unsubscribe = onValue(sesRef, (snapshot) => {
        // console.log("Hello")
        if (snapshot.exists()) {
          const sessionInfo = snapshot.val();
        //   console.log("SessionInf..........................",sessionInfo);
          callback(sessionInfo);
        } else {
          callback(null); // Session does not exist
        }
      });
  
      // Return the unsubscribe function so you can stop listening to updates when needed
      return unsubscribe;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };




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