import React, {Component} from 'react'


class Headerform extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return (
                <div className="login">
                    <input className="form-control loginform" placeholder='Login' />
                    {/*<input className="form-control loginform" type="password" placeholder='Password' />*/}
                    <button className="btn btn-primary btnsmenu loginform">Go!</button>
                </div>
        );
    }
}

export default Headerform