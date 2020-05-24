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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();

	objectToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
	const transformedCollection = collectionsSnapshot.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items
		};
	});

	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

firebase.initializeApp(configuration);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
