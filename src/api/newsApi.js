import RequestHeaders from './header';
const url='http://localhost:3001';
const News = function (){
    this.getAll = function () {
        return fetch(url + '/news', {
            method: 'GET',
            headers: RequestHeaders
        }).then(result => result.json());;
    }

    
}

export default new News();