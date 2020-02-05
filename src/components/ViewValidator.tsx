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

export default class ViewValidator extends React.Component<IAppProps, IAppState> {

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
        this.props.history.push("/validators/xyz/0x0000000000000000000000000000000000000000/deposit");
    }

    handleChange(event: any) {
        let value = event.target.value;
    }

    public render() {
        return (
            <div>
                <section>
                    <header className="masthead">
                        <h2><Link to="/validators">Validator Clients</Link> / <Link to="/validators/xyz">XYZ</Link> / 0x0000000000000000000000000000000000000000</h2>
                        <nav className="space-left">
                            <button
                                className="button button--primary"
                                onClick={this.handleNext}>
                                Deposit (Balance: 31.9ETH)
                            </button>
                        </nav>
                    </header>
                    <div className="aggregates">
                        <article>
                            <h6>Initail Deposit</h6>
                            <p>32 Eth</p>
                        </article>
                        <article>
                            <h6>Total Earnings</h6>
                            <p>123</p>
                        </article>
                        <article>
                            <h6>Active</h6>
                            <p>Yes</p>
                        </article>
                        <article>
                            <h6>Slashed</h6>
                            <p>No</p>
                        </article>
                    </div>
                    <div className="graph-holder">
                        <div>
                            {renderBarChart1}
                            <p>Balance</p>
                        </div>
                        <div>
                            {renderBarChart2}
                            <p>Slot</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
