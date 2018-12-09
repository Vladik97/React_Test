import React, {Fragment} from "react";

import { Switch, Route } from "react-router-dom";

import Header from './container/Header.js'
import Home from './components/home'
import Alltests from './container/AllTests.js'
import StartTest from './container/StartTests.js'
import History from './components/history'
import Settings from './components/setting'

export default () => (
	<Fragment>
		<Header />
		<Switch>
			<div>
				<Route exact path="/" component = { Home } />
			 	<Route exact path="/test" component = { Alltests } />
				<Route exact path="/test/JavaScript" component = { StartTest } />
				<Route exact path="/test/jQuery" component = { StartTest } />
				<Route exact path="/history" component = { History } />
				<Route exact path="/setting" component = { Settings } />
			</div>
		</Switch>
	</Fragment>
);

		    