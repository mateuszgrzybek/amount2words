import "mocha";
import { assert } from "chai";

import index from "../src";
import localeMaps from "./testData/testData";
import errorMessages from "../src/errorMessages";

const testParams = {
  correct: {
    parseAmountToWords: {
      enUS: {
        currency: "USD",
        expectedData: localeMaps.correct.parseAmountToWords.enUS,
      },
      plPL: {
        currency: "PLN",
        expectedData: localeMaps.correct.parseAmountToWords.plPL,
      },
    },
    concatParsedValues: {
      USD: {
        scenarioVariantName: "US Dollars",
        currency: "USD",
        expectedData: localeMaps.correct.concatParsedValues.USD,
      },
      PLN: {
        scenarioVariantName: "Polish Zlotys",
        currency: "PLN",
        expectedData: localeMaps.correct.concatParsedValues.PLN,
      },
    },
  },
  faulty: {
    parseAmountToWords: localeMaps.faulty.parseAmountToWords,
    concatParsedValues: localeMaps.faulty.concatParsedValues,
  },
};

describe("parseAmountToWords function", () => {
  const faultyParams = testParams.faulty.parseAmountToWords;

  describe("should return the expected number in words", () => {
    describe("should return the expected number in words, given the value parameter is a string", () => {
      it("should return the expected number in words in American English", () => {
        const params = testParams.correct.parseAmountToWords.enUS;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseAmountToWords(entry[0], "enUS");
          assert.equal(parsedValue, entry[1]);
        }
      });

      it("should return the expected number in words in Polish", () => {
        const params = testParams.correct.parseAmountToWords.plPL;
        for (let entry of params.expectedData.entries()) {
          const parsedValue = index.parseAmountToWords(entry[0], "plPL");
          assert.equal(parsedValue, entry[1]);
        }
      });
    });
  });

  describe(`should throw "${faultyParams.errorMessage}" error, given the value's length exceeds the parsing limits`, () => {
    faultyParams.values.forEach(value => {
      it(`Value of ${value} should throw an error`, () => assert.throws(() => index.parseAmountToWords(value, "enUS"), errorMessages.parsingLimits));
    });
  });
});

describe("concatParsedValues function", () => {
  const correctParams = testParams.correct.concatParsedValues;
  const faultyParams = testParams.faulty.concatParsedValues;

  Object.keys(correctParams).forEach(currencyKey => {
    describe(`should return the whole expected amount of ${
      correctParams[currencyKey as keyof typeof correctParams].scenarioVariantName
    } in words along with proper currency`, () => {
      const expected = correctParams[currencyKey as keyof typeof correctParams].expectedData;
      const currency = correctParams[currencyKey as keyof typeof correctParams].currency;

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

  describe(`should throw "${faultyParams.errorMessage}" error, given the value's decimal piece has more than 2 digits`, () => {
    faultyParams.values.forEach(value => {
      it(`Value of ${value} should throw an error`, () => assert.throws(() => index.concatParsedValues(value, "USD", "enUS", false), errorMessages.decimalPieceLength));
    });
  });
});
