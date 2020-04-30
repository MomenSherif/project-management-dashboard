// ❗ Dummy data will be removed later
const teamsReducerDefaultState = [
  {
    id: 1,
    name: 'Front End',
    leader: {
      id: 1,
      firstName: `mo'men`,
      lastName: 'sherif',
      phoneNumber: ' 01222',
      email: `mo'men@gmail.com`,
      jobTitle: 'frontend developer'
    },
    description: `Hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
    asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
    facilis provident minima aspernatur eligendi cupiditate assumenda,
    incidunt praesentium. Accusantium.`,
    employees: [
      {
        id: 2,
        firstName: 'Menna',
        lastName: 'elnokally',
        phoneNumber: ' 01222',
        email: 'menna@gmail.com',
        jobTitle: 'frontend developer'
      },
      {
        id: 3,
        firstName: 'Christina',
        lastName: 'Adel',
        phoneNumber: ' 01222',
        email: 'christina@gmail.com',
        jobTitle: 'frontend developer'
      },
      {
        id: 4,
        firstName: 'Amr',
        lastName: 'Ouf',
        phoneNumber: '01222',
        email: 'Amr@gmail.com',
        jobTitle: 'frontend developer'
      }
    ],
    projects: [
      {
        id: 1,
        title: 'React project',
        state: 'In-review',
        organizationId: 'ITI'
      },
      {
        id: 2,
        title: 'Angular project',
        state: 'In-progress',
        organizationId: 'ITI'
      }
    ],
    createdAt: Date.now()
  },
  {
    id: 2,
    name: 'Back End',
    leader: {
      id: 5,
      firstName: `wes`,
      lastName: 'bos',
      phoneNumber: ' 01222',
      email: `wesbos@gmail.com`,
      jobTitle: 'backend developer'
    },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
    asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
    facilis provident minima aspernatur eligendi cupiditate assumenda,
    incidunt praesentium. Accusantium.`,
    employees: [1, 2, 3],
    projects: [1, 2, 3],
    createdAt: Date.now()
  },
  {
    id: 3,
    name: 'Human Resources',
    leader: {
      id: 6,
      firstName: `jonas`,
      lastName: '',
      phoneNumber: ' 01222',
      email: `jonas@gmail.com`,
      jobTitle: ''
    },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
    asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
    facilis provident minima aspernatur eligendi cupiditate assumenda,
    incidunt praesentium. Accusantium.`,
    employees: [1, 2, 3],
    createdAt: Date.now()
  }
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
      return state.filter(team => team.id !== action.id);

    case 'UPDATE_TEAM':
      const index = state.findIndex(team => team.id === action.id);
      action.updates.leader = {
        ...state[index].leader,
        email: action.updates.leader
      };

      return state.map(team =>
        team.id !== action.id ? team : { ...team, ...action.updates }
      );

    case 'ADD_MEMBER':
      let newState = [...state];
      let indx = newState.findIndex(t => t.id === action.teamId);
      newState[indx].employees.push(action.member);
      return newState;

    default:
      return state;
  }
};

export default teamsReducer;
