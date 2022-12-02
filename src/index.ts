import numeralsLocale from "./numeralsLocale";

function parseAmountToWords(value = "0", parsingLocale = "en"): string {
  if (value === "0" || value === "00") return numeralsLocale[parsingLocale].zero;

  const valueTriplets = ("0".repeat((2 * value.length) % 3) + value).match(/.{3}/g) ?? [];

  if (valueTriplets.length > numeralsLocale[parsingLocale].largeNumbers().length) return "Parsing limits exceeded";

  let parsedValue = "";

  return (
    valueTriplets.forEach((triplet, index) => {
      if (parseInt(triplet)) {
        parsedValue = `${parsedValue} ${numeralsLocale[parsingLocale].firstSectionPattern(triplet)} ${numeralsLocale[parsingLocale].secondSectionPattern(triplet)} ${numeralsLocale[
          parsingLocale
        ].largeNumbersSectionPattern(valueTriplets, index)}`;
      }
    }),
    parsedValue.trim()
  );
}

function concatParsedValues(wholePiece: string, decimalPiece: string, currencySymbol: string, conjunctionWord = "and", toLowerCase = false): string {
  const matchingMonetaryUnitLocale = Object.keys(numeralsLocale).find(k => numeralsLocale[k].monetaryUnitSymbol === currencySymbol) ?? "en";

  const concatenatedValues = `${parseAmountToWords(wholePiece)} ${numeralsLocale[matchingMonetaryUnitLocale]?.wholeMonetaryUnit(
    wholePiece
  )} ${conjunctionWord} ${parseAmountToWords(decimalPiece)} ${numeralsLocale[matchingMonetaryUnitLocale]?.decimalMonetaryUnit(decimalPiece)}`;

  return toLowerCase ? concatenatedValues.toLowerCase() : concatenatedValues;
}

export default concatParsedValues;
