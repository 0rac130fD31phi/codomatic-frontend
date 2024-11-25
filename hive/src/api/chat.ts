import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

interface MessageData {
  sender: string;
  content: string;
  timestamp: string;
}

export async function sendMessage(projectId: string, messageData: MessageData) {
  try {
    const docRef = await addDoc(collection(db, `projects/${projectId}/messages`), messageData);
    console.log("Message sent with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error sending message: ", e);
    throw e;
  }
}

export async function getChatHistory(projectId: string) {
  try {
    const querySnapshot = await getDocs(collection(db, `projects/${projectId}/messages`));
    const messages: MessageData[] = [];
    querySnapshot.forEach((doc) => {
      messages.push(doc.data() as MessageData);
    });
    return messages;
  } catch (e) {
    console.error("Error getting chat history: ", e);
    throw e;
  }
}
