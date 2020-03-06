import React, { Component } from 'react';
import ShipmentList from './components/ShipmentList';
import ShipmentDetail from './components/ShipmentDetail';
import Pagenotfound from './components/Pagenotfound';
import { Route, Switch } from "react-router-dom";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<div className="shipment_app">
				<Switch>
					<Route path="/" exact component={ShipmentList}></Route>
					<Route path="/shipment/:id" component={ShipmentDetail}></Route>
					<Route path="*" component={Pagenotfound} />
				</Switch>
			</div>
		);
	}
}

export default App;
