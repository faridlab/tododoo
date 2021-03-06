enum Periority {
  URGENT = 1 << 3,
  IMPORTANT = 1 << 2,
  LESS_URGENT = 1 << 1,
  LESS_IMPORTANT = 1,
  Q1 = URGENT + IMPORTANT, // DO IT NOW
  Q2 = URGENT + LESS_IMPORTANT, // PLAN
  Q3 = LESS_URGENT + IMPORTANT, // DELIGATE
  Q4 = LESS_URGENT + LESS_IMPORTANT, // ELIMINATE
}

enum UserType {
  USER = 'USER',
  ASSIGNEE = 'ASSIGNEE',
  ASSIGNEER = 'ASSIGNEER',
  COLLABORATOR = 'COLLABORATOR',
}

export {
  Periority,
  UserType
}