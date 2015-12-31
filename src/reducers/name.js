import { SET_NAME } from '../actions/name'

const initialState = [
  {
    name: ''
  }
];

export default function name(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}