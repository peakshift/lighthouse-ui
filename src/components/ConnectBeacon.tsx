import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

export default class ConnectBeacon extends React.Component<IAppProps, IAppState> {

    public state: IAppState = AppStore.getValues();

    constructor(props: IAppProps, state: IAppState) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
        // AppStore.on("update_app_store", this.handleStateChange);
    }

    componentWillUnmount() {
        // AppStore.off(
        //     "update_app_store",
        //     this.handleStateChange
        // );
    }

    handleStateChange(): any {
        // return this.setState(
        //     AppStore.getValues()
        // );
    }

    handleNext(): void {
        this.props.history.push("/beacons/view/mr-poopy-butthole");
    }

    handleCancel(): void {
        this.props.history.push("/start");
    }

    handleChange(event: any) {
        let value = event.target.value;
        //AppActions.saveKeyToStore(value);
    }

    public render() {
        return (
            <section>
                <article className="text">
                    <h1>Connect to a new Beacon node</h1>
                    <div className="banner">
                        <h4>Need help?</h4>
                        <p>The beacon node needs to have it's REST API exposed. The <code>--http</code> flag starts the API so the validator can produce blocks.</p>
                        <p><a href="https://lighthouse-book.sigmaprime.io/simple-testnet.html" target="_blank">Documentation</a></p>
                    </div>
                    <p>
                        <strong>NAME</strong><br />
                        <input type="text" placeholder="Name this cluster" onChange={this.handleChange} />
                    </p>
                    <p>
                        <strong>REST API</strong><br />
                        <input type="text" placeholder="http://localhost:5052" onChange={this.handleChange} />
                    </p>
                </article>
                <nav className="actions">
                    <button
                        className="button"
                        onClick={this.handleCancel}>
                        Cancel
                    </button>
                    <button
                        className="button button--primary"
                        onClick={this.handleNext}>
                        Connect
					</button>
                </nav>
            </section>
        );
    }
}
