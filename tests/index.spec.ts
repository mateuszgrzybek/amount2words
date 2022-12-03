import "mocha";
import { assert } from "chai";

import concatParsedValues from "../src";
import localeMaps from "./testData";

describe("concatParsedValues function", () => {
  describe("should return the expected amount of US Dollars in words", () => {
    const expected = localeMaps.USD;
    const currency = "USD";

    describe("should return the expected amount given the value parameter is a floating point number", () => {
      it("should return the expected amount in american english", () => {
        for (let entry of expected.enUS.entries()) {
          const parsedValue = concatParsedValues(entry[0], currency, "enUS", false);
          assert.equal(parsedValue, entry[1]);
        }
      });

      it("should return the expected amount in polish", () => {
        for (let entry of expected.plPL.entries()) {
          const parsedValue = concatParsedValues(entry[0], currency, "plPL", false);
          assert.equal(parsedValue, entry[1]);
        }
      });
    });

    describe("should return the expected amount given the value parameter is a string", () => {
      it("should return the expected amount in american english", () => {
        for (let entry of expected.enUS.entries()) {
          const parsedValue = concatParsedValues(entry[0].toString(), currency, "enUS", false);
          assert.equal(parsedValue, entry[1]);
        }
      });

      it("should return the expected amount in polish", () => {
        for (let entry of expected.plPL.entries()) {
          const parsedValue = concatParsedValues(entry[0].toString().replace(".", ","), currency, "plPL", false);
          assert.equal(parsedValue, entry[1]);
        }
      });
    });
  });
});
