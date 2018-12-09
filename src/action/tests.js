import * as types from "../constants/actionTypes";

export const startTest = payload => ({
	type: types.START_TEST,
	payload
});

export const addMark = payload => ({
	type: types.ADD_MARK,
	payload
});

export const allMark = payload => ({
	type: types.ALL_MARK,
	payload
});

export const totalMark = payload => ({
	type: types.TOTAL_MARK,
	payload
});

export const showModale = payload =>({
  type: types.SHOW_MODAL,
  payload
})

export const closeModale = payload =>({
  type: types.CLOSE_MODAL,
  payload
})

export const clineTest = payload =>({
  type: types.CLINE_TEST,
  payload
})