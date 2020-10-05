import { GET_ALL_NEWS } from "../types";

const initialNewsState = { news: [] };

export default function news(state = initialNewsState, action) {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { news: action.news };
    default:
      return state;
  }
}
