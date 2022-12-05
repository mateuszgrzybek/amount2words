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

const currencyOptions = {
  USD: {
    enUS: {
      whole: function (value: string): string {
        return currencyDeclinationMethods.enUS(value, "Dollar", "Dollars");
      },
      decimal: function (value: string): string {
        return currencyDeclinationMethods.enUS(value, "Cent", "Cents");
      },
    },
    plPL: {
      whole: function (value: string): string {
        return currencyDeclinationMethods.plPL(value, "Dolar", "Dolarów", "Dolary");
      },
      decimal: function (value: string): string {
        return currencyDeclinationMethods.plPL(value, "Cent", "Centów", "Centy");
      },
    },
  },
  PLN: {
    enUS: {
      whole: function (value: string) {
        return currencyDeclinationMethods.enUS(value, "Zloty", "Zlotys");
      },
      decimal: function (value: string) {
        return currencyDeclinationMethods.enUS(value, "Grosz", "Groszys");
      },
    },
    plPL: {
      whole: function (value: string): string {
        return currencyDeclinationMethods.plPL(value, "Złoty", "Złotych", "Złote");
      },
      decimal: function (value: string): string {
        return currencyDeclinationMethods.plPL(value, "Grosz", "Groszy", "Grosze");
      },
    },
  },
};

export default currencyOptions;
