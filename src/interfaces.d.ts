interface IAppProps {
	history?: any, // react-router injected propery
}

interface IAppState {
	someStateValue: number;
}

interface IAppStoreClass extends IAppState {
	getValues(): IAppState;
	resetStore(): void;
	handleActions(action: any): void;
}

interface IAppActions {
	getValues(): void;
	resetStore(): void;
}