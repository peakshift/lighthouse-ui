/// <reference path="interfaces.d.ts"/>
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from "react-router-dom";
import './App.css';

import Start from "./components/Start";
import AddBeacon from "./components/AddBeacon";
import AddValidator from "./components/AddValidator";
import ListValidators from "./components/ListValidators";

import AppStore from "./stores/AppStore";

export default class App extends React.Component {
	public render() {
		return (
			<Router>
				<Route path="/" exact component={Start} />
				<Route path="/add-beacon" exact component={AddBeacon} />
				<Route path="/add-validator" exact component={AddValidator} />
				<Route path="/list-validators" exact component={ListValidators} />
			</Router>
		);
	}
}