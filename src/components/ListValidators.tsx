import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import List from "../components/List";

export default class ConnectValidator extends React.Component<IAppProps, IAppState> {

    public state: IAppState = AppStore.getValues();

    constructor(props: IAppProps, state: IAppState) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        //this.App = this.App.bind(this);
    }

    componentWillMount() {
        // AppStore.on("update_app_store", this.handleStateChange);
    }

    componentWillUnmount() {
        // AppStore.off(
        //     "update_app_store",
        //     this.handleStateChange
        // );
    }

    handleStateChange(): any {
        // return this.setState(
        //     AppStore.getValues()
        // );
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
                    <h2>Validator List</h2>
                    <button className="button-actions">Create Validator</button>
                    <List />
                </section>
            </div>
        );
    }
}
