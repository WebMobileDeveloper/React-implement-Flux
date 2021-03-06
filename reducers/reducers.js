/**
 * Created by Pro on 7/19/2017.
 */
import {combineReducers} from 'redux';
import {ADD_TODO} from '../actions/actions';

function todo(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
            };
        default:
            return state;
    }

}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        default:
            return state;
    }
}

const totoApp=combineReducers({
    todos
});
export default todoApp;