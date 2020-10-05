import RequestHeaders from './header';
const url='http://localhost:3001';
const Task = function (){
    this.getTasks = function (){
        /* return fetch(url + '/tasks/', {
            method: 'GET',
            headers: RequestHeaders
        }).then(result => result.json()); */
        return [{
            "title": "My fourth task",
            "backgroundColor": "purple"
          }];
    }
    this.searchTask = function (taskToSearch) {
        /* return fetch(url + '/tasks/search/' + taskToSearch, {
            method: 'GET',
            headers: RequestHeaders
        }).then(result => result.json()); */
        return [{
            "title": "My third task",
            "backgroundColor": "purple"
          }];
    }

    
}

export default new Task();