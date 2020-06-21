export default class Filter implements BeaconFilter {
   byName(beaconNodes: Array<BeaconNode>, name: string): Array<BeaconNode> {
      const results = beaconNodes.filter(node => {
         return node.name === name;
      });
      return results;
   }

   byVersion(
      beaconNodes: Array<BeaconNode>,
      version: string
   ): Array<BeaconNode> {
      const results = beaconNodes.filter(node => {
         return node.version === version;
      });
      return results;
   }

   byValidatorCount(
      beaconNodes: Array<BeaconNode>,
      min: number,
      max: number
   ): Array<BeaconNode> {
      const results = beaconNodes.filter(node => {
         return node.validators >= min && node.validators <= max;
      });
      return results;
   }
}
