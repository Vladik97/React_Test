import React, {Component} from 'react'

import Headerlogo from '../components/header/Headerlogo.js'
import Headerbtn from '../components/header/Headerbtn.js'
import Headerform from '../components/header/Headerform.js'



class Header extends Component {
    // constructor(props){
    //     super(props)

    // }

    render(){
        return (
            <div className="header">
                <Headerlogo />
                <Headerbtn />
                <Headerform />
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     inputData: state.todo.inputData,
//     list: state.todo.list
// });

// const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App);

export default Header