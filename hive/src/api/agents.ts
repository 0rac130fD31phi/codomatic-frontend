import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Agent {
  id: string;
  name: string;
  role: string;
}

export async function listAgents(teamId: string): Promise<Agent[]> {
  try {
    const querySnapshot = await getDocs(collection(db, `teams/${teamId}/agents`));
    const agents: Agent[] = [];
    querySnapshot.forEach((doc) => {
      agents.push({ id: doc.id, ...doc.data() } as Agent);
    });
    return agents;
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw e;
  }
}
