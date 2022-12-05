import "mocha";
import { assert } from "chai";

import index from "../src";
import localeMaps from "./testData";

const testParams = {
  parseAmountToWords: {
    enUS: {
      currency: "USD",
      expectedData: localeMaps.parseAmountToWords.enUS,
    },
    plPL: {
      currency: "PLN",
      expectedData: localeMaps.parseAmountToWords.plPL,
    },
  },
  concatParsedValues: {
    USD: {
      scenarioVariantName: "US Dollars",
      currency: "USD",
      expectedData: localeMaps.concatParsedValues.USD,
    },
    PLN: {
      scenarioVariantName: "Polish Zlotys",
      currency: "PLN",
      expectedData: localeMaps.concatParsedValues.PLN,
    },
  },
};

describe("parseAmountToWords function", () => {
  describe("should return the expected number in words", () => {
    describe("should return the expected number in words, given the value parameter is a floating point number", () => {
      it("should return the expected number in words in American English", () => {
        const params = testParams.parseAmountToWords.enUS;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseAmountToWords(entry[0], "enUS");
          assert.equal(parsedValue, entry[1]);
        }
      });

      it("should return the expected number in words in Polish", () => {
        const params = testParams.parseAmountToWords.plPL;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseAmountToWords(entry[0], "plPL");
          assert.equal(parsedValue, entry[1]);
        }
      });
    });

    describe("should return the expected number in words, given the value parameter is a string", () => {
      it("should return the expected number in words in American English", () => {
        const params = testParams.parseAmountToWords.enUS;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseAmountToWords(entry[0], "enUS");
          assert.equal(parsedValue, entry[1]);
        }
      });

      it("should return the expected number in words in Polish", () => {
        const params = testParams.parseAmountToWords.plPL;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseAmountToWords(entry[0], "plPL");
          assert.equal(parsedValue, entry[1]);
        }
      });
    });
  });
});

describe("concatParsedValues function", () => {
  const params = testParams.concatParsedValues;

  Object.keys(params).forEach(currencyKey => {
    describe(`should return the whole expected amount of ${params[currencyKey as keyof typeof params].scenarioVariantName} in words along with proper currency`, () => {
      const expected = params[currencyKey as keyof typeof params].expectedData;
      const currency = params[currencyKey as keyof typeof params].currency;

      describe("should return the whole expected amount with proper currency, given the value parameter is a floating point number", () => {
        it("should return the whole expected amount with proper currency in American English", () => {
          for (let entry of expected.enUS.entries()) {
            const parsedValue = index.concatParsedValues(entry[0], currency, "enUS", false);
            assert.equal(parsedValue, entry[1]);
          }
        });

        it("should return the whole expected amount with proper currency in Polish", () => {
          for (let entry of expected.plPL.entries()) {
            const parsedValue = index.concatParsedValues(entry[0], currency, "plPL", false);
            assert.equal(parsedValue, entry[1]);
          }
        });
      });

      describe("should return the expected amount with proper currency, given the value parameter is a string", () => {
        it("should return the expected amount with proper currency in American English", () => {
          for (let entry of expected.enUS.entries()) {
            const parsedValue = index.concatParsedValues(entry[0].toString(), currency, "enUS", false);
            assert.equal(parsedValue, entry[1]);
          }
        });

        it("should return the expected amount with proper currency in Polish", () => {
          for (let entry of expected.plPL.entries()) {
            const parsedValue = index.concatParsedValues(entry[0].toString().replace(".", ","), currency, "plPL", false);
            assert.equal(parsedValue, entry[1]);
          }
        });
      });
    });
  });
});
