/// <reference path="../interfaces.d.ts"/>

import EventEmitter from "events";

import dispacter from "../dispatcher";

class AppStore extends EventEmitter implements IAppStoreClass {
   public someStateValue: number;
   public beaconNodes: Array<BeaconNode>;

   constructor() {
      super();
      // set defaul values
      this.someStateValue = 0;
      this.beaconNodes = new Array();
   }

   /**
    * Set initial state
    * @return {any} [description]
    */
   resetStore(): void {
      this.someStateValue = 0;
      this.beaconNodes = new Array();
      this.emit("update_app_store");
   }

   /**
    * Get the current values of this store
    * @return {IAppState}
    */
   getValues(): IAppState {
      return {
      	someStateValue: this.someStateValue,
        beaconNodes: this.beaconNodes,
      };
   }

   handleActions(action: any): void {
      switch (action.type) {
         case "RESET_STORE":
            this.resetStore();
            break;
         case "GET_VALUES":
            this.getValues();
            break;
         default:
            console.log("Not implemented!", action);
            break;
      }
   }
}

const appStore = new AppStore();

dispacter.register(appStore.handleActions.bind(appStore));

export default appStore;

// EXPOSE AS GLOBAL FOR DEBUGGING IN BROWSER
if (process.env.NODE_ENV === "development") {
   (window as any).appStore = appStore;
}
