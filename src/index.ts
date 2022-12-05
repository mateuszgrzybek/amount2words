import numeralsLocale from "./locale/numeralsLocale";
import errorMessages from "./errorMessages";

function handleValueType(value: number | string, parsingLocale: string): string {
  let valueStringified = typeof value === "string" ? value : value.toString();

  if (numeralsLocale[parsingLocale as keyof typeof numeralsLocale].delimiter === ",") {
    valueStringified = valueStringified.replace(".", ",");
  }

  return valueStringified;
}

function parseAmountToWords(value: number | string = "0", parsingLocale = "enUS"): string {
  const valueStringified = handleValueType(value, parsingLocale);

  if (valueStringified === "0" || valueStringified === "00") return numeralsLocale[parsingLocale as keyof typeof numeralsLocale].zero;

  const valueTriplets = ("0".repeat((2 * valueStringified.length) % 3) + value).match(/.{3}/g) ?? [];

  if (valueTriplets.length > numeralsLocale[parsingLocale as keyof typeof numeralsLocale].largeNumbers().length) {
    throw new Error(errorMessages.parsingLimits);
  }

  let parsedValue = "";

  return (
    valueTriplets.forEach((triplet, index) => {
      if (parseInt(triplet)) {
        parsedValue = `${parsedValue} ${numeralsLocale[parsingLocale as keyof typeof numeralsLocale].firstSectionPattern(triplet)} ${numeralsLocale[
          parsingLocale as keyof typeof numeralsLocale
        ].secondSectionPattern(triplet)} ${numeralsLocale[parsingLocale as keyof typeof numeralsLocale].largeNumbersSectionPattern(valueTriplets, index)}`;
      }
    }),
    parsedValue.trim().replace(/ +(?= )/g, "")
  );
}

function concatParsedValues(amountToParse: number | string, currencySymbol: string, locale: string, toLowerCase = false): string {
  const matchingNumeralsLocale = Object.keys(numeralsLocale).find(k => k === locale) ?? "enUS";

  const amountStringified = handleValueType(amountToParse, matchingNumeralsLocale);

  const amountSplit = amountStringified.split(numeralsLocale[matchingNumeralsLocale as keyof typeof numeralsLocale].delimiter);
  const wholePiece = amountSplit[0];
  const decimalPiece = amountSplit[1];

  if (!!decimalPiece && decimalPiece.length > 2) {
    throw new Error(errorMessages.decimalPieceLength);
  }

  const conjunctionWord = numeralsLocale[matchingNumeralsLocale as keyof typeof numeralsLocale].conjunctionWord;

  const concatenatedValues = `${parseAmountToWords(wholePiece, locale)} ${numeralsLocale[matchingNumeralsLocale as keyof typeof numeralsLocale]?.wholeMonetaryUnit(
    wholePiece,
    currencySymbol,
    locale
  )} ${conjunctionWord} ${parseAmountToWords(decimalPiece, locale)} ${numeralsLocale[matchingNumeralsLocale as keyof typeof numeralsLocale]?.decimalMonetaryUnit(
    decimalPiece,
    currencySymbol,
    locale
  )}`;

  return toLowerCase ? concatenatedValues.toLowerCase() : concatenatedValues;
}

export default {
  parseAmountToWords,
  concatParsedValues,
};
