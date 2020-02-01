interface IAppProps {
   history?: any; // react-router injected propery
}

interface IAppState {
   someStateValue: number;
   beaconNodes: Array<BeaconNode>;
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

interface BeaconNode {
   name: stirng;
   peers: number;
   validators: number;
   syncState: number;
   headSlot: number;
   finalizedSlot: number;
   diskUsage: number;
   version: string;
}

interface BeaconFilter {
   byName(beaconNodes: Array<BeaconNode>, name: string): Array<BeaconNode>;
   byVersion(
      beaconNodes: Array<BeaconNode>,
      version: string
   ): Array<BeaconNode>;
   byValidatorCount(
      beaconNodes: Array<BeaconNode>,
      min: number,
      max: number
   ): Array<BeaconNode>;
}
