import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

interface AgentData {
  name: string;
  role: string;
}

export async function addAgent(teamId: string, agentData: AgentData) {
  try {
    const docRef = await addDoc(collection(db, `teams/${teamId}/agents`), agentData);
    console.log("Agent added with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
