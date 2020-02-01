import BeaconFilter from "../../utils/BeaconFilter";
const beaconFilter = new BeaconFilter();

const nodes: Array<BeaconNode> = [
   {
      name: "test",
      peers: 10,
      validators: 34,
      syncState: 2,
      headSlot: 400,
      finalizedSlot: 343,
      version: "3",
      diskUsage: 343
   },
   {
      name: "test3",
      peers: 24,
      validators: 45,
      syncState: 2,
      headSlot: 400,
      finalizedSlot: 343,
      version: "7",
      diskUsage: 343
   },
   {
      name: "test4",
      peers: 34,
      validators: 56,
      syncState: 2,
      headSlot: 400,
      finalizedSlot: 343,
      version: "7",
      diskUsage: 343
   }
];

describe("Test filter by name", () => {
   test("returns 1 result", () => {
      let results = beaconFilter.byName(nodes, "test3");
      expect(results.length).toBe(1);
   });
   test("returns 0 results", () => {
      let results = beaconFilter.byName(nodes, "test5");
      expect(results.length).toBe(0);
   });
   test("returns 1 result", () => {
      let results = beaconFilter.byName(nodes, "test");
      expect(results.length).toBe(1);
   });
});

describe("Test filter by version", () => {
   test("returns no results", () => {
      let results = beaconFilter.byVersion(nodes, "5");
      expect(results.length).toBe(0);
   });
   test("returns 2 results", () => {
      let results = beaconFilter.byVersion(nodes, "7");
      expect(results.length).toBe(2);
   });
   test("returns 1 results", () => {
      let results = beaconFilter.byVersion(nodes, "3");
      expect(results.length).toBe(1);
   });
});

describe("Test filter by validator count", () => {
   test("returns no results", () => {
      let results = beaconFilter.byValidatorCount(nodes, 12, 22);
      expect(results.length).toBe(0);
   });
   test("returns 2 results", () => {
      let results = beaconFilter.byValidatorCount(nodes, 45, 57);
      expect(results.length).toBe(2);
   });
   test("returns 1 results", () => {
      let results = beaconFilter.byValidatorCount(nodes, 34, 37);
      expect(results.length).toBe(1);
   });
});
