
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"


export const loadNotes = async( uid ) => {

    const dcu = collection(db, `${ uid }/journal/notes`)
    const notesSnap = await getDocs(dcu);
    const notes = [];
    
    notesSnap.forEach( snap => {
        notes.push({
            id: snap.id,
            ...snap.data()
        });
    });

    return notes;
}