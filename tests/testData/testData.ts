import errorMessages from "../../src/errorMessages";
import { enUS, plPL } from "./locale/locales";

const localeMaps = {
  correct: {
    parseValueToWords: {
      enUS: enUS.parseValueToWords,
      plPL: plPL.parseValueToWords,
    },
    parseDecimalValueToWords: {
      USD: {
        enUS: enUS.parseDecimalValueToWords.USD,
        plPL: plPL.parseDecimalValueToWords.USD,
      },
      PLN: {
        enUS: enUS.parseDecimalValueToWords.PLN,
        plPL: plPL.parseDecimalValueToWords.PLN,
      },
    },
  },
  faulty: {
    parseValueToWords: {
      values: ["1000000000000000000000000000000000000", "2002350005550067890000000000000009999", "9999999999999999999999999999999999999999"],
      errorMessage: errorMessages.parsingLimits,
    },
    parseDecimalValueToWords: {
      values: ["0.000", "0.001", "15.000957", "101.000009", "7891231.006787123", "3677000000010.123456789"],
      errorMessage: errorMessages.decimalPieceLength,
    },
  },
};

export default localeMaps;
