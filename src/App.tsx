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
import ListValidatorClients from "./components/ListValidatorClients";
import ViewValidator from "./components/ViewValidator";
import ViewValidatorClient from "./components/ViewValidatorClient";

import AppStore from "./stores/AppStore";

export default class App extends React.Component {
	public render() {
		return (
			<Router>
				<Route path="/" exact component={Start} />
				<Route path="/start" exact component={Start} />
				<Route path="/beacons/new" exact component={ConnectBeacon} />
				<Route path="/beacons/view/mr-poopy-butthole" exact component={ViewBeacon} />
				<Route path="/beacons/list" exact component={ListBeacons} />

				<Route path="/validators" exact component={ListValidatorClients} />
				<Route path="/validators/connect" exact component={ConnectValidator} />
				<Route path="/validators/xyz" exact component={ViewValidatorClient} />
				<Route path="/validators/new" exact component={AddValidator} />
				<Route path="/validators/xyz/0x0000000000000000000000000000000000000000" exact component={ViewValidator} />
			</Router>
		);
	}
}