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
        this.props.history.push("/validators/xyz");
    }

    handleCancel(): void {
        this.props.history.push("/start");
    }

    public render() {
        return (
            <section>
                <article className="text">
                    <h2><Link to="/validators">Validator Clients</Link> / Connect Validator Client</h2>
                    <p>
                        <strong>NAME</strong><br />
                        <input type="text" placeholder="Name" />
                    </p>
                    <p>
                        <strong>REST API</strong><br />
                        <input type="text" placeholder="http://localhost:5054" />
                    </p>
                    <p>
                        <strong>SESSION TOKEN</strong><br />
                        <input type="text" placeholder="Session Token" />
                    </p>
                    <p>
                        <strong>TAGS</strong><br />
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
                        Connect
                    </button>
                </nav>
            </section>
        );
    }
}
