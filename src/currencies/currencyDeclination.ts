import "core-js/actual/string/at";

const currencyDeclinationMethods = {
  // monetaryUnitSingular: Dollar
  enUS: function (value: string, monetaryUnitSingular: string, monetaryUnitPlural: string): string {
    const lastNumber = value?.at(-1);
    const preceedingNumber = value?.at(-2);
    switch (lastNumber) {
      case "1":
        return !!preceedingNumber && preceedingNumber !== "0" ? monetaryUnitPlural : monetaryUnitSingular;
      default:
        return monetaryUnitPlural;
    }
  },
  // monetaryUnitSingular: Dolar, monetaryUnitPlural: Dolarów, monetaryUnitPluralException: Dolary
  plPL: function (value: string, monetaryUnitSingular: string, monetaryUnitPlural: string, monetaryUnitPluralException: string): string {
    const lastNumber = value?.at(-1);
    const preceedingNumber = value?.at(-2);
    switch (lastNumber) {
      case "1":
        return !!preceedingNumber && preceedingNumber !== "0" ? monetaryUnitPlural : monetaryUnitSingular;
      case "2":
      case "3":
      case "4":
        return (!!preceedingNumber && preceedingNumber !== "1") || value.length === 1 ? monetaryUnitPluralException : monetaryUnitPlural;
      default:
        return monetaryUnitPlural;
    }
  },
};

export default currencyDeclinationMethods;
