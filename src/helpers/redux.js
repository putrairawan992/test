export const load = (actionType) => `${actionType}_LOAD`;
export const success = (actionType) => `${actionType}_SUCCESS`;
export const failure = (actionType) => `${actionType}_FAIL`;

export const status = {
  PRISTINE: 'PRISTINE',
  FETCHING: 'FETCHING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
  REFRESHING: 'REFRESHING',
};
