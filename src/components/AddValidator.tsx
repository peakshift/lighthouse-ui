import React from "react";
import {
    Link
} from "react-router-dom";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

export default class AddValidator extends React.Component<IAppProps, IAppState> {

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
        this.props.history.push("/view-validator");
    }

    public render() {
        return (
            <section>
                <article className="text">
                    <h1><Link to="/list-beacons">Beacon Chain List</Link> / <Link to="/view-beacon">Beacon Name</Link> / Add Validator</h1>
                    <p><input type="text" placeholder="Name" /></p>
                    <p><input type="text" placeholder="Deposit Value" /></p>
                    <p><input type="text" placeholder="Eth1 Deposit Node" /></p>
                    <p><input type="text" placeholder="Password" /></p>
                    <p><input type="text" placeholder="Private Key" /></p>
                    <p><input type="text" placeholder="Tags" /></p>
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
