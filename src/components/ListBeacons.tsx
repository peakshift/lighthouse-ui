import React from "react";
import {
	Link
} from "react-router-dom";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "../components/List";

export default class ListBeacons extends React.Component<IAppProps, IAppState> {

	public state: IAppState = AppStore.getValues();

	constructor(props: IAppProps, state: IAppState) {
		super(props);
		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleNext = this.handleNext.bind(this);
		//this.App = this.App.bind(this);
	}

	componentWillMount() {
		AppStore.on("update_app_store", this.handleStateChange);
	}

	componentWillUnmount() {
		AppStore.off(
			"update_app_store",
			this.handleStateChange
		);
	}

	handleStateChange(): any {
		return this.setState(
			AppStore.getValues()
		);
	}

	handleNext(): void {
		//this.props.history.push("/add-validator");
	}

	handleChange(event: any) {
		let value = event.target.value;
		//AppActions.saveKeyToStore(value);
	}

	public render() {
		return (
			<div>
				<section>
					<header className="masthead">
						<h1>Beacon Nodes &mdash; Overview</h1>
						<nav>
							<button
								className="button button--primary"
								onClick={this.handleNext}>
								Connect Beacon Node
							</button>
						</nav>
					</header>
					<div className="aggregates">
						<article>
							<h6>Total Peers</h6>
							<p>123</p>
						</article>
						<article>
							<h6>Total Peers</h6>
							<p>123</p>
						</article>
						<article>
							<h6>Total Peers</h6>
							<p>123</p>
						</article>
						<article>
							<h6>Total Peers</h6>
							<p>123</p>
						</article>
					</div>
					<h4>Total Connected Peers: 540</h4>
					<p>Connected Valicators: 16,530</p>
					<button className="button-actions">
						<Link to="/connect-validator">
							Connect Validator
						</Link>
					</button>
				</section>
			</div>
		);
	}
}
