import {createStore, combineReducers} from 'redux';
import goalReducer from './src/reducers';

const rootReducers = combineReducers({
	goals: goalReducer,
})

export const store = createStore(rootReducers);
