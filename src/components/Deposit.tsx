import React from "react";
import {
	Link
} from "react-router-dom";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

export default class Deposit extends React.Component<IAppProps, IAppState> {

	public state: IAppState = AppStore.getValues();

	constructor(props: IAppProps, state: IAppState) {
		super(props);
		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleNext = this.handleNext.bind(this);
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
		alert("Not implemented.")
	}

	public render() {
		return (
			<section>
				<article className="text">
					<h1><Link to="/validators">Validator Clients</Link> / <Link to="/validators/xyz">xyz</Link> / <Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link> / Deposit</h1>
					<p>Note: We're showing all fields for debugging/demo</p>
					<p><input type="number" min="32" placeholder="Deposit Amount" /></p>
					<p><input type="text" placeholder="Public Key" /></p>
					<p><input type="text" placeholder="Withdrawal Credentials" /></p>
					<p><input type="text" placeholder="Signature" /></p>
					<p><input type="text" placeholder="Deposit Data Root" /></p>
				</article>
				<nav className="actions">
					<button
						className="button button--primary"
						onClick={this.handleNext}>
						Send Deposit
					</button>
				</nav>
			</section>
		);
	}
}
