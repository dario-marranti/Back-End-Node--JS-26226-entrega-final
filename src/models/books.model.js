import{collection} from 'firebase/firestore';
import {db} from '../config/firebase.js';

const booksCollection = collection(db, 'books');

export const getBooksCollection = async () => {
    const snapshot = await getDocs(booksCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
