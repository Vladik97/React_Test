import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'antd/dist/antd.css';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./state/state";

import Router from "./router.js";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>		
			<Router />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();
