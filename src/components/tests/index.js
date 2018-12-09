import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import Questions from './questions.js';
// import StartTest from '../../container/StartTests.js';

class Test extends Component {
	constructor(props) {
		super(props);
			this.goTest=this.goTest.bind(this)
	}
	goTest = () => {
		const { test, startTest }=this.props;
		startTest(test)
	};
	render() {
		const { test }=this.props;
		
		const { name }=test;
		const namet = '/test/' + name;
		return (
			<div className="card-header alltestbtn">
				<h1 className="cr">{name}</h1>
				
				<Link className="a" to={namet} onClick={this.goTest}>Start</Link>
			</div>
		);
	}
}


export default Test
				// <div>
				// 	{ questions.map(el => <Questions test={el}/>) }
				// 	{console.log(this.props)}
				// 	{console.log(name)}
				// 	{console.log(questions)}
				// </div>
