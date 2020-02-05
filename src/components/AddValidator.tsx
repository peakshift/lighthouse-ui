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
        this.handleCancel = this.handleCancel.bind(this);
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
        this.props.history.push("/validators/xyz/0x0000000000000000000000000000000000000000/deposit");
    }

    handleCancel(): void {
        this.props.history.push("/validators/xyz");
    }

    public render() {
        return (
            <React.Fragment>
                <section>
                    <header className="masthead">
                        <h2><Link to="/validators">Validator Clients</Link> / <Link to="/validators/xyz">XYZ</Link> / Spawning a new Validator</h2>
                    </header>
                    <article className="text">
                        <p>
                            <strong>Address</strong><br />
                            <input type="text" placeholder="" value="0x0000000000000000000000000000000000000000" disabled />
                        </p>
                        <p>
                            <strong>Deposit Amount</strong><br />
                            <input type="number" min="32" value="32" placeholder="Deposit Value" />
                        </p>
                        <p>
                            <strong>Tags (optional)</strong><br />
                            <input type="text" placeholder="Tags" />
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
                            Create Validator
                        </button>
                    </nav>
                </section>
            </React.Fragment>
        );
    }
}
