const currencyOptions = {
  USD: {
    enUS: {
      whole: function (value: string) {
        switch (value) {
          case "1":
            return "Dollar";
          default:
            return "Dollars";
        }
      },
      decimal: function (value: string) {
        switch (value) {
          case "1":
            return "Cent";
          default:
            return "Cents";
        }
      },
    },
    plPL: {
      whole: function (value: string): string {
        const lastNumber = value?.at(-1);
        const preceedingNumber = value?.at(-2);
        switch (lastNumber) {
          case "1":
            return !!preceedingNumber ? "Dolarów" : "Dolar";
          case "2":
          case "3":
          case "4":
            return (!!preceedingNumber && preceedingNumber !== "1") || value.length === 1 ? "Dolary" : "Dolarów";
          default:
            return "Dolarów";
        }
      },
      decimal: function (value: string): string {
        const lastNumber = value?.at(-1);
        const preceedingNumber = value?.at(-2);
        switch (lastNumber) {
          case "1":
            return !!preceedingNumber ? "Centów" : "Cent";
          case "2":
          case "3":
          case "4":
            return !!preceedingNumber && preceedingNumber !== "1" ? "Centy" : "Centów";
          default:
            return "Centów";
        }
      },
    },
  },
  PLN: {
    enUS: {
      whole: function (value: string) {
        switch (value) {
          case "1":
            return "Zloty";
          default:
            return "Zlotys";
        }
      },
      decimal: function (value: string) {
        switch (value) {
          case "1":
            return "Grosz";
          default:
            return "Groszys";
        }
      },
    },
    plPL: {
      whole: function (value: string): string {
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
      decimal: function (value: string): string {
        const lastNumber = value?.at(-1);
        const preceedingNumber = value?.at(-2);
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
    },
  },
};

export default currencyOptions;
