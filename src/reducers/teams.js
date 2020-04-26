const teamsReducerDefaultState = [
  {
    id: 1,
    name: 'Front End',
    leader: `Mo'men Sherif`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
    asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
    facilis provident minima aspernatur eligendi cupiditate assumenda,
    incidunt praesentium. Accusantium.`,
    employees: [1, 2, 3],
    projects: [1, 2, 3],
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: 'Back End',
    leader: `Wes Bos`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
    asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
    facilis provident minima aspernatur eligendi cupiditate assumenda,
    incidunt praesentium. Accusantium.`,
    employees: [1, 2, 3],
    projects: [1, 2, 3],
    createdAt: Date.now(),
  },
  {
    id: 3,
    name: 'Human Resources',
    leader: 'Jonas',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
    asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
    facilis provident minima aspernatur eligendi cupiditate assumenda,
    incidunt praesentium. Accusantium.`,
    createdAt: Date.now(),
  },
];

/**
 * Team
 *  id:
 *  name:
 *  description:
 *  leader:
 *  employees:
 *  projects:
 *  createdAt:
 */

const teamsReducer = (state = teamsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return action.teams;
    case 'ADD_TEAM':
      return state.concat(action.team);
    case 'DELETE_TEAM':
      return state.filter((team) => team.id !== action.id);
    case 'UPDATE_TEAM':
      return state.map((team) =>
        team.id !== action.id ? team : { ...team, ...action.updates }
      );
    default:
      return state;
  }
};

export default teamsReducer;
