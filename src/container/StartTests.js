import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../action/tests";

import QuestionInTest from '../components/tests/questionInTest';
import EditModal from '../components/modal';

class StartTest extends Component {
	
	closeEditModal=()=>this.props.closeModale()

	render() {
		
		const { addMark, startTest, testData, youMark, allMark, allMarks, total, totalMark, showModal, showModale, clineTest }=this.props;
		const { name, questions }=testData;

		return (
			<div className="card mx-auto margin" style={{width: '70%'}}>
			 	<h1 className="cr">{name}</h1>
				<QuestionInTest test={questions} 
					startTest={startTest} 
					youMark={youMark}
					addMark={addMark}
					totalMark={totalMark} 
					allMark={allMark}
					allMarks={allMarks}
					total={total}
					showModal={showModal}
					showModale={showModale}/>
				<EditModal visible={this.props.showModal}
					update={{title: 'Updated title'}}
					onOk={this.closeEditModal}
					total={total} 
					testData={testData}
					clineTest={clineTest}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	testData: state.test.testData,
	youMark: state.test.youMark,
	allMarks: state.test.allMarks,
	total: state.test.total,
	showModal: state.test.showModal
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StartTest);