/// <reference path="interfaces.d.ts"/>
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from "react-router-dom";
import './App.css';

import Start from "./components/Start";
import ConnectBeacon from "./components/ConnectBeacon";
import ConnectValidator from "./components/ConnectValidator";
import ListBeacons from "./components/ListBeacons";
import ViewBeacon from "./components/ViewBeacon";
import AddValidator from "./components/AddValidator";
import ListValidators from "./components/ListValidators";
import ViewValidator from "./components/ViewValidator";

import AppStore from "./stores/AppStore";

export default class App extends React.Component {
	public render() {
		return (
			<Router>
				<Route path="/" exact component={Start} />
				<Route path="/start" exact component={Start} />
				<Route path="/beacons/new" exact component={ConnectBeacon} />
				<Route path="/beacons/view/mr-poopy-butthole" exact component={ViewBeacon} />
				<Route path="/connect-validator" exact component={ConnectValidator} />
				<Route path="/beacons" exact component={ListBeacons} />
				<Route path="/add-validator" exact component={AddValidator} />
				<Route path="/list-validators" exact component={ListValidators} />
				<Route path="/view-validator" exact component={ViewValidator} />
			</Router>
		);
	}
}