import React from "react";
import {
    Link
} from "react-router-dom";
import { BarChart, Bar, LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "../components/List";

export default class ViewValidatorClient extends React.Component<IAppProps, IAppState> {

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
        this.props.history.push("/validators/new");
    }

    public render() {
        return (
            <div>
                <section>
                    <header className="masthead">
                        <h2><Link to="/validators">Validator Clients</Link> / XYZ</h2>
                        <nav className="space-left">
                            <button
                                className="button button--primary"
                                onClick={this.handleNext}>
                                Spawn new Validator
                            </button>
                        </nav>
                    </header>
                    <div className="aggregates">
                        <article>
                            <h6>Total Validators</h6>
                            <p>8</p>
                        </article>
                        <article>
                            <h6>Active / Inactive Validators</h6>
                            <p>5/3</p>
                        </article>
                        <article>
                            <h6>Slashed</h6>
                            <p>...</p>
                        </article>
                        <article>
                            <h6>Total Earnings</h6>
                            <p>1.68 ETH</p>
                        </article>
                    </div>
                    <table className="large-staker">
                        <thead>
                            <tr>
                                <th>Public Key</th>
                                <th>...</th>
                                <th>...</th>
                                <th>...</th>
                                <th>...</th>
                                <th>...</th>
                                <th>...</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x0000...0000</Link></td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}
