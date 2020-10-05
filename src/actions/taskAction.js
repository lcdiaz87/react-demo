import Task from "../api/taskApi";
import { SEARCH_TASK, GET_TASKS } from "../types";



export function getTasksAsync (){
    return dispatch => (Task.getTasks().then(tasks => dispatch(getTasks(tasks))))
}
export function getTasks(tasks){
    return { type: GET_TASKS, payload: {tasks:tasks}}
}

export function getAllTasksMatchedByNameAsync (taskToSearch){
    return dispatch => (Task.searchTask(taskToSearch).then(tasksMatched => dispatch(getAllTasksMatchedByName(tasksMatched))))
}
export function getAllTasksMatchedByName(tasksMatched){
    return { type: SEARCH_TASK, payload: {tasks:tasksMatched}}
}
