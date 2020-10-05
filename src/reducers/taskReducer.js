import { SEARCH_TASK, GET_TASKS } from "../types";

const initialNewsState =  [{
    "title": "My second task",
    "backgroundColor": "purple"
  }] ;

export default function task(state = initialNewsState, action) {
  switch (action.type) {
    case GET_TASKS:
        return state;
    case SEARCH_TASK:
      return { tasks: action.tasks };
    default:
      return state;
  }
}
