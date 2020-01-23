import React from "react";
import {
    Link
} from "react-router-dom";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "../components/List";

export default class ViewBeacon extends React.Component<IAppProps, IAppState> {

    public state: IAppState = AppStore.getValues();

    constructor(props: IAppProps, state: IAppState) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        //this.App = this.App.bind(this);
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
        //AppActions.saveKeyToStore(value);
    }

    public render() {
        return (
            <div>
                <section>
                    <header className="masthead">
                        <h1><Link to="/beacons">Beacon Nodes</Link> / Mr Poopy Butthole</h1>
                        <nav>
                            <button
                                className="button button--primary"
                                onClick={this.handleNext}>
                                Connect Validator Client
                            </button>
                        </nav>
                    </header>
                    <p>
                        <ul>
                            <li>Version: Lighthouse/v0.1.0-unstable/x86_64-macos</li>
                            <li>Connected Peers: ___</li>
                            <li>Syncing State: <span className="badge">SYNC_STATE</span></li>
                            <li>Disk Usage</li>
                            <li>Connected Validators #</li>
                        </ul>
                    </p>
                </section>
            </div>
        );
    }
}
