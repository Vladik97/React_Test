import * as types from "../constants/actionTypes";

const initState = {
	testData: {},
	youMark: [],
	allMarks: [],
	total: 0,
	showModal: false
};

export default (state = initState, { type, payload }) => {
	switch (type) {
		case types.START_TEST: {
			// console.log("START_TEST", payload, type);
			return {
				...state,
				testData: payload
			};
		}
		case types.ADD_MARK: {

			console.log("ADD_MARK", payload/*, type*/);
			// console.log(state.youMark);
			return {
				...state,
				youMark: [payload] 

			};
		}
		case types.ALL_MARK: {
			console.log("ALL_MARK", payload/*, type*/);
			// console.log(state.youMark);
			return {
				...state,
				allMarks: state.allMarks.concat(payload),
				youMark: []  

			};
		}
		case types.TOTAL_MARK: {
			// console.log("TOTAL_MARK", payload, type);
			// console.log(state.youMark);

			return {
				...state,
				total: state.total + payload,
				allMarks: []  

			};
		}
		case types.SHOW_MODAL: {
			// console.log("SHOW_MODAL", payload, type);
			// console.log(state.youMark);

			return {
				...state, 
				showModal: true
			};
		}
		case types.CLOSE_MODAL: {
			// console.log("CLOSE_MODAL", payload, type);
			// console.log(state.youMark);

			return {
				...state, 
				showModal: false
			};
		}
		case types.CLINE_TEST: {
			// console.log("CLINE_TEST", payload, type);
			// console.log(state.youMark);

			return {
				...state, 
				testData: {},
				youMark: [],
				allMarks: [],
				total: 0,
				showModal: false
			};
		}
		default:
			return state;
	}
};
// case types.ADD_MARK: {
// 			console.log("ADD_MARK", payload, type);
// 			// console.log(state.youMark);
// 			return {
// 				...state,
// 				youMark: state.youMark.concat(payload) дописывае
			//  youMark: [payload]  меняет
// 			};
// 		}