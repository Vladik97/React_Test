import React, {Component} from 'react';

import Answers from './answers.js'

class QuestionInTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
				count: 0,
				disabledDcc: false,
				disabledFinish: true,
				disabledAdd: false
			}	
	}

	componentDidMount(){
		 
		if(this.state.count <= 0){
			return this.setState({disabledDcc: true})
		}
		else if(this.state.count >= this.props.test.length-1){			
			return this.setState({disabledAdd: true})
		}
	}
	
	add=()=>{
		const { youMark, allMark, allMarks, test }=this.props;	
		allMark(youMark)

		if(this.state.count >= this.props.test.length-1){
			if(allMarks.length >= test.length-1){			
				return (
					this.setState({disabledFinish: false}),
					this.setState({disabledAdd: true})
				)
			}
			else {	
				return (
					this.setState({count: this.state.count + 1}), 
					this.setState({disabledAdd: true})
				)
			}	
		}
		else {			
			return (
				this.setState({count: this.state.count + 1}),
				this.setState({disabledDcc: false})
			)	
		}
	}

	dcc=()=>{
		if(this.state.count == 1){
			return (
				this.setState({count: this.state.count-1}),
				this.setState({disabledDcc: true})
			)		
		}
		else {
			return (
				this.setState({count: this.state.count-1}),
				this.setState({disabledAdd: false})
			)
		}
	}

	finish=()=>{
		const { youMark, allMark, totalMark, allMarks, total, showModal, showModale }=this.props;
			
		let totalM = 0;

		for(var i = 0; i <= allMarks.length-1; i++) {
		    totalM += allMarks[i]  
		}
		totalMark(totalM)
		showModale()
		// alert("вы набрали "+totalM+" БАЛЛОВ!!!") 
	}

	render() {

			const { count, disabledAdd, disabledDcc, disabledFinish }=this.state
			const { test, addMark, youMark, allMark, allMarks, total, showModal, showModale }=this.props

			console.log(allMarks)
			// console.log(allMarks.length)
			// console.log(test.length-1)
			console.log(total)
			console.log("total",total)
			
		return (
			<div>
				<h3 className="cr">{test[count].question}</h3>
				<form name={"form"+count} className="inputQuestion">	
					{ test[count].answers.map((el,key) => <Answers test={el} 
																type={test[count].type} 
																youMark={youMark} 
																count={count} 
																addMark={addMark}
																allMark={allMark}
																allMarks={allMarks} 
																key={key} />) }
	        	</form>
				<div className="batani">
					<button className="btn btn-primary btn-lg" onClick={this.dcc} disabled={disabledDcc}>Back</button>
					
					<button className="btn btn-primary btn-lg" onClick={this.finish} disabled={disabledFinish}>Finish</button>
					<button className="btn btn-primary btn-lg" onClick={this.add} disabled={disabledAdd}>Next</button>
				</div>
			</div>
		);
	}
}

export default QuestionInTest
