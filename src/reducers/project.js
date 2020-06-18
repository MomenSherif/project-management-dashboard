// const projectsReducerDefaultState = [
//   {
//     id: 1,
//     title: 'F1ront End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//       asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//       facilis provident minima aspernatur eligendi cupiditate assumenda,
//       incidunt praesentium. Accusantium.`,
//     state: 'in-progress',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [1, 2],
//   },
//   {
//     id: 2,
//     title: 'B1ack End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'in-review',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [2, 3],
//   },
//   {
//     id: 3,
//     title: 'M1EAN Stack Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'done',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [1, 3],
//   },
//   {
//     id: 4,
//     title: 'F2ront End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//       asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//       facilis provident minima aspernatur eligendi cupiditate assumenda,
//       incidunt praesentium. Accusantium.`,
//     state: 'in-progress',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [2, 3],
//   },
//   {
//     id: 5,
//     title: 'B2ack End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'in-review',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [1, 2, 3],
//   },
//   {
//     id: 6,
//     title: 'M2EAN Stack Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'done',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [1, 2],
//   },
//   {
//     id: 7,
//     title: 'F3ront End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//       asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//       facilis provident minima aspernatur eligendi cupiditate assumenda,
//       incidunt praesentium. Accusantium.`,
//     state: 'in-progress',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [],
//   },
//   {
//     id: 8,
//     title: 'B3ack End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'in-review',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [],
//   },
//   {
//     id: 9,
//     title: 'M3EAN Stack Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'done',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [],
//   },
//   {
//     id: 10,
//     title: 'F4ront End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//       asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//       facilis provident minima aspernatur eligendi cupiditate assumenda,
//       incidunt praesentium. Accusantium.`,
//     state: 'in-progress',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [],
//   },
//   {
//     id: 11,
//     title: 'B4ack End Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'in-review',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [],
//   },
//   {
//     id: 13,
//     title: 'M4EAN Stack Project',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
//         asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
//         facilis provident minima aspernatur eligendi cupiditate assumenda,
//         incidunt praesentium. Accusantium.`,
//     state: 'done',
//     budget: 200000,
//     deadline: new Date(),
//     createdAt: Date.now(),
//     teams: [],
//   },
// ];

const projectsReducerDefaultState = [];
const projectsReducer = (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return action.projects;
    case 'ADD_PROJECT':
      return state.concat(action.project);
    case 'DELETE_PROJECT':
      return state.filter((project) => project.id !== action.id);
    case 'UPDATE_PROJECT':
      return state.map((project) =>
        project.id !== action.id ? project : { ...project, ...action.updates }
      );
    case 'TOGGLE_TEAM':
      const project = state.find((project) => project.id === action.projectId);
      if (!project.teams.includes(action.teamId)) {
        project.teams.push(action.teamId);
      } else {
        const teams = project.teams.filter((ele) => ele !== action.teamId);
        project.teams = teams;
      }
      return state.map((proj) =>
        proj.id !== action.projectId ? proj : { ...project }
      );
    default:
      return state;
  }
};
export default projectsReducer;
