import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBWF8qukMcoY8UAvb0113LhEztqY7w1Xqo",
    authDomain: "deals-mobile-b99d8.firebaseapp.com",
    projectId: "deals-mobile-b99d8",
    storageBucket: "deals-mobile-b99d8.appspot.com",
    messagingSenderId: "668653746404",
    appId: "1:668653746404:web:05adf09a1fc0652166d4f1",
    measurementId: "G-KDBEEYM68C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
    return getToken(messaging, {vapidKey: 'BEJ7kDxA5VrFkHhM8im-5GsvRGus_x-OBHgkTnu0niOy8-8ooJVO2PIPmX9nNU4m5kK4MxUC-KfPdca5EV6e77s'})
        .then((currentToken) => {
            if (currentToken) {
                console.log('Current token: ' + currentToken);
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
                Notification.requestPermission().then((permission) => {
                    if (permission === 'granted') {
                        console.log('Notification permission granted.');
                        // TODO(developer): Retrieve a registration token for use with FCM.
                        // ...
                    } else {
                        console.log('Unable to get permission to notify.');
                    }
                });
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });
