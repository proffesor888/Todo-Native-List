import {ADD_GOAL, REMOVE_GOAL, addGoal, removeGoal} from '../actions';

const initialState = {
	data: [],
}

export default (state=initialState, action) => {
	switch(action.type) {
		case (ADD_GOAL) : {
			const {payload} = action;
			const mas = [...state.data];
			mas.push(payload);
			return {
				...state, data: mas
			}
		}
		case (REMOVE_GOAL): {
			const {payload} = action;
			const mas = [...state.data];
			const newState = mas.filter(item => item.key !== payload);
			return {
				...state, data: newState
			}
		}
		default: {
			return state;
		}
	}
}