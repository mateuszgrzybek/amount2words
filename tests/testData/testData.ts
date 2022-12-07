import errorMessages from "../../src/errorMessages";
import { enUS, plPL } from "./locale/locales";

const localeMaps = {
  correct: {
    parseAmountToWords: {
      enUS: enUS.parseAmountToWords,
      plPL: plPL.parseAmountToWords,
    },
    concatParsedValues: {
      USD: {
        enUS: enUS.concatParsedValues.USD,
        plPL: plPL.concatParsedValues.USD,
      },
      PLN: {
        enUS: enUS.concatParsedValues.PLN,
        plPL: plPL.concatParsedValues.PLN,
      },
    },
  },
  faulty: {
    parseAmountToWords: {
      values: ["1000000000000000000000000000000000000", "2002350005550067890000000000000009999", "9999999999999999999999999999999999999999"],
      errorMessage: errorMessages.parsingLimits,
    },
    concatParsedValues: {
      values: ["0.000", "0.001", "15.000957", "101.000009", "7891231.006787123", "3677000000010.123456789"],
      errorMessage: errorMessages.decimalPieceLength,
    },
  },
};

export default localeMaps;
