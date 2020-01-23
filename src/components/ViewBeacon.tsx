import React from "react";
import {
    Link
} from "react-router-dom";
import { BarChart, Bar, LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "../components/List";

const data = [
    { name: '23:00', balance: 320, write: 2400, amt: 2400 },
    { name: '00:00', balance: 330, write: 200, amt: 2400 },
    { name: '01:00', balance: 340, write: 2400, amt: 2400 },
    { name: '02:00', balance: 350, write: 2600, amt: 2400 },
    { name: '03:00', balance: 360, write: 400, amt: 2400 },
    { name: '04:00', balance: 370, write: 300, amt: 2400 }
];

const renderBarChart1 = (
    <BarChart width={500} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="balance" fill="#8884d8" barSize={30} />
    </BarChart>
);

const renderBarChart2 = (
    <BarChart width={500} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="write" fill="#8884d8" barSize={30} />
    </BarChart>
);

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
                        </ul>
                    </p>
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
                    <List />
                </section>
            </div>
        );
    }
}
