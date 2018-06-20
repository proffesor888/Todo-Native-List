export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

export const addGoal = payload => {
	return {
		type: ADD_GOAL,
		payload
	}
};

export const removeGoal = payload => {
	return {
		type: REMOVE_GOAL,
		payload
	}
};