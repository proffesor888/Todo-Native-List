import {ADD_GOAL, REMOVE_GOAL, addGoal, removeGoal} from '../actions';

const initialState = {
	data: [],
}

export default (state=initialState, action) => {
	switch(action.type) {
		case (ADD_GOAL) : {
			return {
				...state, data: action.payload
			}
		}
		case (REMOVE_GOAL): {
			return {
				...state, data: action.payload
			}
		}
		default: {
			return state;
		}
	}
}