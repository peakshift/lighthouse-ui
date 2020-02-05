import React from "react";
import {
    Link
} from "react-router-dom";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "./List";
import Table from "./Table";

export default class ListBeacons extends React.Component<IAppProps, IAppState> {

    public state: IAppState = AppStore.getValues();

    constructor(props: IAppProps, state: IAppState) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleManageValidators = this.handleManageValidators.bind(this);
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

    handleManageValidators(): void {
        this.props.history.push("/validators");
    }

    handleChange(event: any) {
        let value = event.target.value;
    }

    public render() {

        let list = [
            {
                name: "Mr Poopy Butthole",
                peers: "?",
                validators: "?",
                syncState: "?",
                head: "?",
                finalizedSlot: "?",
                diskUsage: "?",
                version: "?",
            },
            {
                name: "shasper-is-back",
                peers: "?",
                validators: "?",
                syncState: "?",
                head: "?",
                finalizedSlot: "?",
                diskUsage: "?",
                version: "?",
            },
            {
                name: "?",
                peers: "?",
                validators: "?",
                syncState: "?",
                head: "?",
                finalizedSlot: "?",
                diskUsage: "?",
                version: "?",
            },
        ];

        return (
            <div>
                <section>
                    <header className="masthead">
                        <h1>Beacon Nodes &mdash; Overview</h1>
                        <nav className="space-left">
                            <button
                                className="button"
                                onClick={this.handleManageValidators}>
                                Manage Validators
                            </button>
                            <button
                                className="button button--primary"
                                onClick={this.handleNext}>
                                Connect Beacon Node
							</button>
                        </nav>
                    </header>
                    <div className="aggregates">
                        <article>
                            <h6>Total Peers</h6>
                            <p>123</p>
                        </article>
                        <article>
                            <h6>Total Peers</h6>
                            <p>123</p>
                        </article>
                        <article>
                            <h6>Total Peers</h6>
                            <p>123</p>
                        </article>
                        <article>
                            <h6>Total Peers</h6>
                            <p>123</p>
                        </article>
                    </div>
                    <h6>Filters</h6>
                    <ul>
                        <li><a href="">Tags</a></li>
                    </ul>
                    <table className="large-staker">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Peers</th>
                                <th>Validators</th>
                                <th>Sync State</th>
                                <th>Head Slot</th>
                                <th>Finalized slot</th>
                                <th>Disk Usage</th>
                                <th>Version</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="/beacons/view/mr-poopy-butthole">Mr Poopy Butthole</Link></td>
                                <td>64</td>
                                <td>256</td>
                                <td>SYNC_STATE</td>
                                <td>90,122</td>
                                <td>90,123</td>
                                <td>70 gb</td>
                                <td>Lighthouse/v0.1.0-unstable/x86_64-macos</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>unknown</td>
                                <td>0</td>
                                <td>0</td>
                                <td>SYNC_STATE</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}
