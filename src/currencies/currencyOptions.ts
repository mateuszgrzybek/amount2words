import currencyDeclinationMethods from "./currencyDeclination";

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
