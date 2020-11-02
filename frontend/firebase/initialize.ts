import firebase from "firebase/app";
import "firebase/firestore";
import config from "./config";

/**
 * For SSR initialization needed with this check
 * to prevent it to initialize on both server & client
 * otherwise it may give error
 */
if (!firebase.apps.length) {
	firebase.initializeApp(config);
} else {
	firebase.app();
}

/**
 * Get timestamp value from firestore
 */
export const getTimeStamp = () => {
	return firebase.firestore.FieldValue.serverTimestamp();
};

export const db = firebase.firestore();
export default firebase;
