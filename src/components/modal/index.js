import React, { Component } from "react";
import { Modal } from "antd";
import {Link} from 'react-router-dom';

export default class EditModal extends Component {

	exit=()=>{
		this.props.clineTest()
	}

	render() {
	    const { visible, onOk, onCancel, total, testData } = this.props;

		return (
			<Modal title="Сумма БАЛЛОВ" okText="确认" cancelText="取消" visible={visible} onOk={onOk}>
				<div className="batani">
				    <h3>Вы набрали {total} балов, из {testData.questions.length*5}</h3> 
					<Link className="a" to="/test" onClick={this.exit}>Ok</Link>
				</div>	
			</Modal>
		);
	}
}