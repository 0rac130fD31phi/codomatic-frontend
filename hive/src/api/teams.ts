import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface Agent {
  id: string;
  name: string;
  role: string;
}

interface Team {
  agents: Agent[];
  specializations: string[];
}

interface Metrics {
  performance: number;
  utilization: number;
}

export async function getTeam(teamId: string): Promise<Team> {
  try {
    const docRef = doc(db, "teams", teamId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as Team;
    } else {
      throw new Error("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
    throw e;
  }
}

export async function getTeamMetrics(teamId: string): Promise<Metrics> {
  try {
    const docRef = doc(db, "teams", `${teamId}/metrics`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as Metrics;
    } else {
      throw new Error("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
    throw e;
  }
}
