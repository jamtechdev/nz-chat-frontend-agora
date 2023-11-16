export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const server = process.env.REACT_APP_SERVER;
export const webSocketServer = process.env.REACT_APP_WEB_SOCKET_SERVER;

export const secretKey = process.env.REACT_APP_ENC_DEC_SECRET_KEY;
export const iv = new Uint8Array([0xa4, 0x79, 0x18, 0x24, 0x6c, 0x3b, 0x49, 0x29, 0xdd, 0xb0, 0x98, 0xbc, 0xb2, 0xb8, 0x65, 0x94]);
