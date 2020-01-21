import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

export default class Start extends React.Component<IAppProps, IAppState> {

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
        this.props.history.push("/add-validator");
    }

    handleChange(event: any) {
        let value = event.target.value;
        AppActions.saveKeyToStore(value);
    }

    public render() {
        return (
            <section>
                <article className="text">
                    <h1>Connect to a Beacon Chain node</h1>
                    <p><input type="text" placeholder="Name" onChange={this.handleChange} value={this.state.account!.beaconName} /></p>
                    <p><input type="text" placeholder="REST API" onChange={this.handleChange} value={this.state.account!.beaconAPI} /></p>
                    {/* <textarea
                        placeholder="Separate each word with a single space"
                        value={this.state.account!.privateKeySeed}
                        onChange={this.handleChange}
                    /> */}
                </article>
                <nav className="actions">
                    <button
                        className="button button--primary"
                        onClick={this.handleNext}>
                        Next
					</button>
                </nav>
            </section>
        );
    }
}
