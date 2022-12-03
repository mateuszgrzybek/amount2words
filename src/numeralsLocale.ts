import currencyOptions from "./currencyOptions";

const numeralsLocale = {
  enUS: {
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
  },
  plPL: {
    monetaryUnitSymbol: "PLN",
    wholeMonetaryUnit(value: string, currency: string, locale: string): string {
      const currencyObject = currencyOptions[currency as keyof typeof currencyOptions];
      return currencyObject[locale as keyof typeof currencyObject].whole(value);
    },
    decimalMonetaryUnit(value: string, currency: string, locale: string): string {
      const currencyObject = currencyOptions[currency as keyof typeof currencyOptions];
      return currencyObject[locale as keyof typeof currencyObject].decimal(value);
    },
    delimiter: ",",
    conjunctionWord: "i",
    thousandsDelimiter: null,
    zero: "Zero",
    oneToNineteen: [
      "",
      "Jeden",
      "Dwa",
      "Trzy",
      "Cztery",
      "Pięć",
      "Sześć",
      "Siedem",
      "Osiem",
      "Dziewięć",
      "Dziesięć",
      "Jedenaście",
      "Dwanaście",
      "Trzynaście",
      "Czternaście",
      "Piętnaście",
      "Szesnaście",
      "Siedemnaście",
      "Osiemnaście",
      "Dziewiętnaście",
    ],
    tensAndHundreds: [
      "",
      "",
      "Dwadzieścia",
      "Trzydzieści",
      "Czterdzieści",
      "Pięćdziesiąt",
      "Sześćdziesiąt",
      "Siedemdziesiąt",
      "Osiemdziesiąt",
      "Dziewięćdziesiąt",
      "Sto",
      "Dwieście",
      "Trzysta",
      "Czterysta",
      "Pięćset",
      "Sześćset",
      "Siedemset",
      "Osiemset",
      "Dziewięćset",
    ],
    /* eslint-disable no-nested-ternary */
    largeNumbers(declinationBasis = "1", isLargeNumberDeclinationException = false): Array<string> {
      const thousandsSuffix =
        declinationBasis.at(-1) === "1" && declinationBasis.at(0) && declinationBasis.at(1) === "0"
          ? "ąc"
          : parseInt(declinationBasis.at(-1)!) >= 2 && parseInt(declinationBasis.at(-1)!) <= 4 && !isLargeNumberDeclinationException
          ? "ące"
          : "ęcy";
      const millionsAndAboveSuffix =
        declinationBasis.at(-1) === "1" && declinationBasis.at(0) && declinationBasis.at(1) === "0"
          ? ""
          : parseInt(declinationBasis.at(-1)!) >= 2 && parseInt(declinationBasis.at(-1)!) <= 4 && !isLargeNumberDeclinationException
          ? "y"
          : "ów";
      return [
        "",
        "Tysi".concat(thousandsSuffix),
        "Milion".concat(millionsAndAboveSuffix),
        "Miliard".concat(millionsAndAboveSuffix),
        "Bilion".concat(millionsAndAboveSuffix),
        "Biliard".concat(millionsAndAboveSuffix),
        "Trylion".concat(millionsAndAboveSuffix),
        "Tryliard".concat(millionsAndAboveSuffix),
      ];
    },
    firstSectionPattern(parsedTriplet: string): string {
      return parseInt(parsedTriplet[0]) ? this.tensAndHundreds[parseInt(`1${parseInt(parsedTriplet[0]) - 1}`)] : "";
    },
    secondSectionPattern(parsedTriplet: string): string {
      return parseInt(parsedTriplet.substring(1)) < 20
        ? this.oneToNineteen[parseInt(parsedTriplet.substring(1))]
        : `${this.tensAndHundreds[parseInt(parsedTriplet[1])]} ${this.oneToNineteen[parseInt(parsedTriplet[2])]}`;
    },
    largeNumbersSectionPattern(tripletsArray: Array<string>, currentTripletIndex: number): string {
      const isLargeNumberDeclinationException = parseInt(tripletsArray[currentTripletIndex]) > 10 && parseInt(tripletsArray[currentTripletIndex]) < 20;
      return this.largeNumbers(tripletsArray[currentTripletIndex], isLargeNumberDeclinationException)[tripletsArray.length - currentTripletIndex - 1];
    },
  },
};

export default numeralsLocale;
