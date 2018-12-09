import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Headerbtn extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return (
            <div className="btnmenu">
                <Link className="a" to='/'>Home</Link>
                <Link className="a" to='/test'>Tests</Link>
                <Link className="a" to='/history'>History</Link>
                <Link className="a" to='/setting'>Settings</Link>
            </div>
        );
    }
}

export default Headerbtn