import React from "react";
import {
    Link
} from "react-router-dom";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "../components/List";

export default class ViewValidator extends React.Component<IAppProps, IAppState> {

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
        //this.props.history.push("/add-validator");
    }

    handleChange(event: any) {
        let value = event.target.value;
        //AppActions.saveKeyToStore(value);
    }

    public render() {
        return (
            <div>
                <section>
                    <h2><Link to="/list-beacons">Beacon Chain List</Link> / <Link to="/view-beacon">Beacon Name</Link> / View Validator</h2>

                </section>
            </div>
        );
    }
}
