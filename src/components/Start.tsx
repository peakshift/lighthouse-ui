import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

export default class Start extends React.Component<IAppProps, IAppState> {

	public state: IAppState = AppStore.getValues();

	constructor(props: IAppProps, state: IAppState) {
		super(props);
		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
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

	handleSecondaryAction(): void {
		this.props.history.push("/some-other-screen");
	}

	handleNext(): void {
		this.props.history.push("/add-beacon");
	}

	public render() {
		return (
			<section>
				<article className="text">
					<h1>Get started</h1>
					<p>The Lighthouse UI allows you to monitor and manage your lighthouse beacon nodes and validator clients.</p>
				</article>
				<nav className="actions">
					<button
						className="button"
						onClick={this.handleSecondaryAction}>
						Connect to a Validator
					</button>
					<button
						className="button"
						onClick={this.handleNext}>
						Create a Validator
					</button>
					<button
						className="button button--primary"
						onClick={this.handleNext}>
						Connect to a Beacon Node
					</button>
				</nav>
			</section>
		);
	}
}
