import "mocha";
import { assert } from "chai";

import index from "../src";
import localeMaps from "./testData/testData";
import errorMessages from "../src/errorMessages";

const testParams = {
  correct: {
    parseValueToWords: {
      enUS: {
        currency: "USD",
        expectedData: localeMaps.correct.parseValueToWords.enUS,
      },
      plPL: {
        currency: "PLN",
        expectedData: localeMaps.correct.parseValueToWords.plPL,
      },
    },
    parseDecimalValueToWords: {
      USD: {
        scenarioVariantName: "US Dollars",
        currency: "USD",
        expectedData: localeMaps.correct.parseDecimalValueToWords.USD,
      },
      PLN: {
        scenarioVariantName: "Polish Zlotys",
        currency: "PLN",
        expectedData: localeMaps.correct.parseDecimalValueToWords.PLN,
      },
    },
  },
  faulty: {
    parseValueToWords: localeMaps.faulty.parseValueToWords,
    parseDecimalValueToWords: localeMaps.faulty.parseDecimalValueToWords,
  },
};

describe("parseValueToWords function", () => {
  const faultyParams = testParams.faulty.parseValueToWords;

  describe("should return the expected number in words", () => {
    describe("should return the expected number in words, given the value parameter is a string", () => {
      it("should return the expected number in words in American English", () => {
        const params = testParams.correct.parseValueToWords.enUS;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseValueToWords(entry[0], "enUS");
          assert.equal(parsedValue, entry[1]);
        }
      });

      it("should return the expected number in words in Polish", () => {
        const params = testParams.correct.parseValueToWords.plPL;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseValueToWords(entry[0], "plPL");
          assert.equal(parsedValue, entry[1]);
        }
      });
    });
  });

  describe(`should throw "${faultyParams.errorMessage}" error, given the value's length exceeds the parsing limits`, () => {
    faultyParams.values.forEach(value => {
      it(`Value of ${value} should throw an error`, () => assert.throws(() => index.parseValueToWords(value, "enUS"), errorMessages.parsingLimits));
    });
  });
});

describe("parseDecimalValueToWords function", () => {
  const correctParams = testParams.correct.parseDecimalValueToWords;
  const faultyParams = testParams.faulty.parseDecimalValueToWords;

  Object.keys(correctParams).forEach(currencyKey => {
    describe(`should return the whole expected amount of ${
      correctParams[currencyKey as keyof typeof correctParams].scenarioVariantName
    } in words along with proper currency`, () => {
      const expected = correctParams[currencyKey as keyof typeof correctParams].expectedData;
      const currency = correctParams[currencyKey as keyof typeof correctParams].currency;

      describe("should return the expected amount with proper currency, given the value parameter is a string", () => {
        it("should return the expected amount with proper currency in American English", () => {
          for (let entry of expected.enUS.entries()) {
            const parsedValue = index.parseDecimalValueToWords(entry[0], currency, "enUS", false);
            assert.equal(parsedValue, entry[1]);
          }
        });

        it("should return the expected amount with proper currency in Polish", () => {
          for (let entry of expected.plPL.entries()) {
            const parsedValue = index.parseDecimalValueToWords(entry[0], currency, "plPL", false);
            assert.equal(parsedValue, entry[1]);
          }
        });
      });
    });
  });

  describe(`should throw "${faultyParams.errorMessage}" error, given the value's decimal piece has more than 2 digits`, () => {
    faultyParams.values.forEach(value => {
      it(`Value of ${value} should throw an error`, () => assert.throws(() => index.parseDecimalValueToWords(value, "USD", "enUS", false), errorMessages.decimalPieceLength));
    });
  });
});
