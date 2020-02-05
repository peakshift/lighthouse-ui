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
		this.props.history.push("/validators/connect");
	}

	handleNext(): void {
		this.props.history.push("/beacons/new");
	}

	public render() {
		return (
			<section>
				<article className="text">
					<h1>Welcome to LightSpeed&trade;</h1>
					<p className="text-large">We created this tool to give you quickest way to <u>manage</u> and <u>monitor</u> from your Lighthouse Beacon Nodes and Validator Clients.</p>

                    <div className="banner">
                        <h4>Need Help Setting up Lighthouse? Check out one of our guides below.</h4>
						<ul className="rs">
							<li><a href="#">Join the Lighthouse Public TestNet</a></li>
							<li><a href="#">Quick Dev Setup</a></li>
							<li><a href="#">Create a Local Testnet</a></li>
						</ul>
                    </div>

					<p>
						<button
							className="button button--primary m-r-1"
							onClick={this.handleNext}>
							Connect to a Beacon Node
						</button>
						<button
							className="button button--primary"
							onClick={this.handleSecondaryAction}>
							Connect a Validator Client
						</button>
					</p>
				</article>

			</section>
		);
	}
}
