import { User, Assignee, Assigneer } from "./user"
import { Periority } from "./enumerations"

interface Like {
  new(task: Task, user: User|Assignee|Assigneer ): Like;
  user: User|Assignee|Assigneer;
  task: Task;
  likes(): User[]|Assignee[]|Assigneer[]
  doYouLikeIt(): boolean;
}

const enum Urgency {
  URGENT=Periority.URGENT|Periority.LESS_URGENT
}
const enum Importantance {
  URGENT=Periority.IMPORTANT|Periority.LESS_IMPORTANT
}

interface TaskPriority {
  urgent: Urgency;
  important: Importantance;
  scale(): number
}

interface Comment {
  new(task: Task, user: User, text: string): Comment;
  task: Task;
  user: User;
  text: string;
  createdAt: Date;
}

interface History {
  new(task: Task, user: User, text: string): History;
  task: Task;
  user: User;
  text: string;
  createdAt: Date;
}

interface Task {
  id: string;
  periority?: TaskPriority;
  isCompleted?: boolean;
  like?: Like;
  title: string;
  description?: string;
  assignees?: Assignee[];
  subtasks?: Task[];
  comments?: Comment[];
  histories: History[];
}