import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

interface Task {
  id: string;
  type: string;
  status: 'planning' | 'in_progress' | 'reviewing' | 'complete';
  assignedAgents: string[];
  dependencies: string[];
  progress: number;
  created: string;
  updated: string;
}

interface Conversation {
  id: string;
  messages: string[];
}

interface Resources {
  files: string[];
  links: string[];
  databases: string[];
}

interface Output {
  code?: string;
  research?: string;
  automation?: string;
}

interface ProjectData {
  name: string;
  description: string;
  teamId: string;
  status: string;
  tasks: Task[];
  conversations: Conversation[];
  resources: Resources;
  output: Output;
}

interface Project extends ProjectData {
  id: string;
}

export async function createProject(projectData: ProjectData) {
  try {
    const docRef = await addDoc(collection(db, "projects"), projectData);
    console.log("Project created with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export async function listProjects() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects: Project[] = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() } as Project);
    });
    return projects;
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw e;
  }
}
