/// <reference path="../interfaces.d.ts"/>

/**
 * Check internet connection
 * @type {Boolean}
 */
const isOnline = (): boolean => {
	return navigator.onLine;
}


export {
	isOnline,
}