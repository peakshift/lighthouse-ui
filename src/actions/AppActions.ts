/// <reference path="../interfaces.d.ts"/>

import dispacter from "../dispatcher";

/**
 * Flux: Action Creators
 */
class AppActions implements IAppActions {

	/**
	 * Reset Store to initial state
	 */
	resetStore(): void {
		dispacter.dispatch({
			type: "RESET_STORE",
		})
	}

	getValues(): void {
		dispacter.dispatch({
			type: "GET_VALUES",
		})
	}

}

export default new AppActions();