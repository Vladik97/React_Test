import React, {Component} from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import questions from '../questions.js'

import * as actions from "../action/tests";

import Test from '../components/tests'

class Alltests extends Component{
	
	render() {
			const { startTest }=this.props;
			
		return (
			<div className="card mx-auto margin" style={{width: '80%'}}>
				{ questions.map((el,key) => <Test test={el} 
												startTest={startTest} 
												key={key} />) 
				}  
			</div>
		);
	}			
}

const mapStateToProps = state => ({
	testData: state.test.testData,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Alltests);