export default {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "default",
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "default",
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "default",
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "default",
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "default",
	messagingSenderId:
		process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "default",
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "default",
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "default",
};
