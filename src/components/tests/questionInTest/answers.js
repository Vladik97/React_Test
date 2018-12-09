import React, {Component, Fragment} from 'react';

class QuestionInTest extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
				mark: []
			}
		
		// this.mark=this.mark.bind(this)
		
			//console.log(this.props);
	}
	// goTest = () => {
	// 	const { test, addMark }=this.props;
	// 	console.log(markOne);
	// 	return{
	// 		 	markOne: test.weight
	// 		}
	// }
	goTest = () => {
		const { test, addMark }=this.props;
		// const state=this.state;
		// const { mark }=this.state;

		// console.log("test",this.props);
		// console.log("weight",test.weight);
		addMark(test.weight);
		// console.log("all",this.state.mark);
		// return{
		// 		...state,
		// 	 	mark: [test.weight] 
		// 	} 
		// console.log("markTest",markTest);
		// this.setState({markTest : markTest=test.weight}) 
		// console.log("markTest",markTest);
	}
	// mark(count) { 
	// 	const { test, markTest }=this.props;
	// 	console.log("test",test);
	// 	console.log("markTest",markTest);
			
// 			this.setState({markTest : markTest=test.weight})
// console.log(markTest)
// console.log("mark", test.weight)		

	// };

	render() {
			
			const { test, type, count, youMark }=this.props;

			// console.log("this.props",this.props);
			// console.log("weight",this.props.test.weight);
			// console.log("youMark",this.props.youMark);

			/*console.log("props", this.props)*/
		if( type === 'oneOF'){						
			return (
				<Fragment>	
					<p><input type="radio" name={ "radio"+count } onChange={this.goTest} />  {test.text} {test.weight}</p> 
			    </Fragment>
			)    				
		}
		else {
			return (
				<Fragment>	
					<p><input type="checkbox" name={ "checkbox"+count } onChange={this.goTest} />  {test.text} {test.weight}</p>
		        </Fragment>
		    )
		}			
				
	}
}


export default QuestionInTest