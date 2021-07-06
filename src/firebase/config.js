import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
let firebaseConfig = {
	apiKey: 'AIzaSyDFVTd7XT74LtXj6H0jIubpuSzQknfDKfg',
	authDomain: 'han-firegram.firebaseapp.com',
	projectId: 'han-firegram',
	storageBucket: 'han-firegram.appspot.com',
	messagingSenderId: '21749139518',
	appId: '1:21749139518:web:7d526289a27f19de3d296f',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize storage
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
