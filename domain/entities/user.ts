interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface DoTaskable {
  canCreateTask: boolean;
  canUpdateTask: boolean;
  canDeleteTask: boolean;
}

interface Assignee extends User, DoTaskable {
  canBeAssigned: boolean;
}

interface Assigneer extends User, DoTaskable {
  canAssign: boolean;
}

interface Collaborator extends User, DoTaskable { }

export {
  User,
  DoTaskable,
  Assignee,
  Assigneer,
  Collaborator
}