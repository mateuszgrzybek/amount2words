const numeralsLocale = {
  en: {
    monetaryUnitSymbol: "USD",
    wholeMonetaryUnit(value: string): string {
      switch (value) {
        case "1":
          return "Dollar";
        default:
          return "Dollars";
      }
    },
    decimalMonetaryUnit(value: string): string {
      switch (value) {
        case "1":
          return "Cent";
        default:
          return "Cents";
      }
    },
    delimiter: ".",
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
  pl: {
    monetaryUnitSymbol: "PLN",
    wholeMonetaryUnit(value: string): string {
      const lastNumber = value.at(-1);
      const preceedingNumber = value.at(-2);
      switch (lastNumber) {
        case "1":
          return !!preceedingNumber ? "Złotych" : "Złoty";
        case "2":
        case "3":
        case "4":
          return (!!preceedingNumber && preceedingNumber !== "1") || value.length === 1 ? "Złote" : "Złotych";
        default:
          return "Złotych";
      }
    },
    decimalMonetaryUnit(value: string): string {
      const lastNumber = value.at(-1);
      const preceedingNumber = value.at(-2);
      switch (lastNumber) {
        case "1":
          return !!preceedingNumber ? "Groszy" : "Grosz";
        case "2":
        case "3":
        case "4":
          return !!preceedingNumber && preceedingNumber !== "1" ? "Grosze" : "Groszy";
        default:
          return "Groszy";
      }
    },
    delimiter: ",",
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
