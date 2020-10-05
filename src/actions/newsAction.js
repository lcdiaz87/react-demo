import { GET_ALL_NEWS } from "../types";

export function getAllAsync (){
    return dispatch => (News.getAll().then(allNews => dispatch(getAllNews(allNews))))
}
export function getAllNews(news){
    return { type: GET_ALL_NEWS, news}
}


/*
export const getAllNewsAsync = () => async (dispatch) => {
  const res = await fetch("/api/news");
  const data = await res.json();
  dispatch({
    type: GET_NEWS,
    payload: data,
  });
};
*/
