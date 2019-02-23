import { CREATE_NEW_POST, DELETE_POST } from '../actions/types';

export default function postReducer(state = [], action ) {
  //  console.log(action);
    //debugger;
    switch(action.type) {
        case CREATE_NEW_POST:  
            console.log(action, "Reducer Log");             
            return [...state, action.payload];
        case DELETE_POST:
            return state.filter(post => post.id !== action.payload.id);
        default:
            return state;
    }
}