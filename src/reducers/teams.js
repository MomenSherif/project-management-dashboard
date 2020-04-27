const teamsReducerDefaultState = [
  {
    id: 1,
    name: 'Front End',
    leader: `Mo'men Sherif`,
    employees: [1, 2, 3],
    projects: [1, 2, 3],
    createdAt: Date.now(),
  },
];

/**
 * Team
 *  id:
 *  name:
 *  leader:
 *  employees:
 *  projects:
 *  createdAt:
 */

const teamsReducer = (state = teamsReducerDefaultState, action) => {
  switch (action.key) {
    default:
      return state;
  }
};

export default teamsReducer;
