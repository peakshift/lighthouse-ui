import React from "react";
import {
    Link
} from "react-router-dom";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "./List";
import Table from "./Table";

export default class ListValidatorClients extends React.Component<IAppProps, IAppState> {

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
        this.props.history.push("/validators/connect");
    }

    handleChange(event: any) {
        let value = event.target.value;
    }

    public render() {
        return (
            <div>
                <section>
                    <header className="masthead">
                        <h1>Validator Clients &mdash; Overview</h1>
                        <nav className="space-left">
                            <button
                                className="button button--primary"
                                onClick={this.handleNext}>
                                Connect Validator Client
                            </button>
                        </nav>
                    </header>
                    <table className="large-staker">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Validators</th>
                                <th>Active</th>
                                <th>Inactive</th>
                                <th>...</th>
                                <th>...</th>
                                <th>Total Earnings</th>
                                <th>Client Version</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="/validators/xyz">XYZ</Link></td>
                                <td>8</td>
                                <td>5</td>
                                <td>3</td>
                                <td>...</td>
                                <td>...</td>
                                <td>1.68 ETH</td>
                                <td>Lighthouse/v0.1.0-unstable</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}
