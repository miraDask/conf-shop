import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const configuration = {
	apiKey: 'AIzaSyCidFQfo1w5hNs_XIYEBPkZ6t1_0NYn4DI',
	authDomain: 'confidence-shop.firebaseapp.com',
	databaseURL: 'https://confidence-shop.firebaseio.com',
	projectId: 'confidence-shop',
	storageBucket: 'confidence-shop.appspot.com',
	messagingSenderId: '601037202062',
	appId: '1:601037202062:web:a5c397bb3c40750a66dfdf',
	measurementId: 'G-CK7QZFBQRM'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdOn = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdOn,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(configuration);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
