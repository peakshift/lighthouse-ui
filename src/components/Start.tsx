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
		this.handleTetiaryAction = this.handleTetiaryAction.bind(this);
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
	handleTetiaryAction(): void {
		this.props.history.push("/connect-validator");
	}

	handleSecondaryAction(): void {
		this.props.history.push("/add-validator");
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

					<p>Step 1</p>
					<button
						className="button button--primary"
						onClick={this.handleNext}>
						Connect to a Beacon Node
					</button>

					<p>Step 2</p>
					<button
						className="button"
						onClick={this.handleSecondaryAction}>
						Create a Validator
					</button>

					<p>Step 3</p>
					<button
						className="button">
						Unlock Metamask
					</button>
				</article>

			</section>
		);
	}
}
