import currencyOptions from "../../currencies/currencyOptions";

const enUS = {
  monetaryUnitSymbol: "USD",
  wholeMonetaryUnit(value: string, currency: string, locale: string): string {
    const currencyObject = currencyOptions[currency as keyof typeof currencyOptions];
    return currencyObject[locale as keyof typeof currencyObject].whole(value);
  },
  decimalMonetaryUnit(value: string, currency: string, locale: string): string {
    const currencyObject = currencyOptions[currency as keyof typeof currencyOptions];
    return currencyObject[locale as keyof typeof currencyObject].decimal(value);
  },
  delimiter: ".",
  conjunctionWord: "and",
  thousandsDelimiter: ",",
  zero: "Zero",
  oneToNineteen: [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ],
  tensAndHundreds: ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"],
  largeNumbers: (): Array<string> => ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion"],
  firstSectionPattern(parsedTriplet: string): string {
    return parseInt(parsedTriplet[0]) ? `${this.oneToNineteen[parseInt(parsedTriplet[0])]} ${this.tensAndHundreds[10]}` : "";
  },
  secondSectionPattern(parsedTriplet: string): string {
    return parseInt(parsedTriplet.substring(1)) < 20
      ? this.oneToNineteen[parseInt(parsedTriplet.substring(1))]
      : this.tensAndHundreds[parseInt(parsedTriplet[1])] + (parseInt(parsedTriplet[2]) ? "-" : "") + this.oneToNineteen[parseInt(parsedTriplet[2])];
  },
  largeNumbersSectionPattern(tripletsArray: Array<string>, currentTripletIndex: number): string {
    return this.largeNumbers()[tripletsArray.length - currentTripletIndex - 1];
  },
};

export { enUS };
