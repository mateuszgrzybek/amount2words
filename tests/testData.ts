const localeMaps = {
  parseAmountToWords: {
    enUS: new Map<number, string>([
      [0, "Zero"],
      [1, "One"],
      [2, "Two"],
      [5, "Five"],
      [11, "Eleven"],
      [12, "Twelve"],
      [17, "Seventeen"],
      [67, "Sixty-Seven"],
      [106, "One Hundred Six"],
      [786, "Seven Hundred Eighty-Six"],
      [1042, "One Thousand Forty-Two"],
      [1055, "One Thousand Fifty-Five"],
      [7786, "Seven Thousand Seven Hundred Eighty-Six"],
      [18166, "Eighteen Thousand One Hundred Sixty-Six"],
      [667842, "Six Hundred Sixty-Seven Thousand Eight Hundred Forty-Two"],
      [1004256, "One Million Four Thousand Two Hundred Fifty-Six"],
      [9999999, "Nine Million Nine Hundred Ninety-Nine Thousand Nine Hundred Ninety-Nine"],
      [440096212, "Four Hundred Forty Million Ninety-Six Thousand Two Hundred Twelve"],
      [1000000000, "One Billion"],
      [44123001000, "Forty-Four Billion One Hundred Twenty-Three Million One Thousand"],
      [3677000000010, "Three Trillion Six Hundred Seventy-Seven Billion Ten"],
    ]),
    plPL: new Map<number, string>([
      [0, "Zero"],
      [1, "Jeden"],
      [2, "Dwa"],
      [5, "Pięć"],
      [11, "Jedenaście"],
      [12, "Dwanaście"],
      [17, "Siedemnaście"],
      [67, "Sześćdziesiąt Siedem"],
      [106, "Sto Sześć"],
      [786, "Siedemset Osiemdziesiąt Sześć"],
      [1042, "Jeden Tysiąc Czterdzieści Dwa"],
      [1055, "Jeden Tysiąc Pięćdziesiąt Pięć"],
      [7786, "Siedem Tysięcy Siedemset Osiemdziesiąt Sześć"],
      [18166, "Osiemnaście Tysięcy Sto Sześćdziesiąt Sześć"],
      [667842, "Sześćset Sześćdziesiąt Siedem Tysięcy Osiemset Czterdzieści Dwa"],
      [1004256, "Jeden Milion Cztery Tysiące Dwieście Pięćdziesiąt Sześć"],
      [9999999, "Dziewięć Milionów Dziewięćset Dziewięćdziesiąt Dziewięć Tysięcy Dziewięćset Dziewięćdziesiąt Dziewięć"],
      [440096212, "Czterysta Czterdzieści Milionów Dziewięćdziesiąt Sześć Tysięcy Dwieście Dwanaście"],
      [1000000000, "Jeden Miliard"],
      [44123001000, "Czterdzieści Cztery Miliardy Sto Dwadzieścia Trzy Miliony Jeden Tysiąc"],
      [3677000000010, "Trzy Biliony Sześćset Siedemdziesiąt Siedem Miliardów Dziesięć"],
    ]),
  },
  concatParsedValues: {
    USD: {
      enUS: new Map<number, string>([
        [0, "Zero Dollars and Zero Cents"],
        [0.0, "Zero Dollars and Zero Cents"],
        [1, "One Dollar and Zero Cents"],
        [2.32, "Two Dollars and Thirty-Two Cents"],
        [5.01, "Five Dollars and One Cent"],
        [7, "Seven Dollars and Zero Cents"],
        [11.99, "Eleven Dollars and Ninety-Nine Cents"],
        [106.47, "One Hundred Six Dollars and Forty-Seven Cents"],
        [786.56, "Seven Hundred Eighty-Six Dollars and Fifty-Six Cents"],
        [1042, "One Thousand Forty-Two Dollars and Zero Cents"],
        [1055.0, "One Thousand Fifty-Five Dollars and Zero Cents"],
        [7786.49, "Seven Thousand Seven Hundred Eighty-Six Dollars and Forty-Nine Cents"],
        [18166.56, "Eighteen Thousand One Hundred Sixty-Six Dollars and Fifty-Six Cents"],
        [667842.71, "Six Hundred Sixty-Seven Thousand Eight Hundred Forty-Two Dollars and Seventy-One Cents"],
        [1004256.99, "One Million Four Thousand Two Hundred Fifty-Six Dollars and Ninety-Nine Cents"],
        [9999999.99, "Nine Million Nine Hundred Ninety-Nine Thousand Nine Hundred Ninety-Nine Dollars and Ninety-Nine Cents"],
        [440096212.87, "Four Hundred Forty Million Ninety-Six Thousand Two Hundred Twelve Dollars and Eighty-Seven Cents"],
        [1000000000.0, "One Billion Dollars and Zero Cents"],
        [44123001000.48, "Forty-Four Billion One Hundred Twenty-Three Million One Thousand Dollars and Forty-Eight Cents"],
        [3677000000010, "Three Trillion Six Hundred Seventy-Seven Billion Ten Dollars and Zero Cents"],
      ]),
      plPL: new Map<number, string>([
        [0, "Zero Dolarów i Zero Centów"],
        [0.0, "Zero Dolarów i Zero Centów"],
        [1, "Jeden Dolar i Zero Centów"],
        [2.32, "Dwa Dolary i Trzydzieści Dwa Centy"],
        [5.01, "Pięć Dolarów i Jeden Cent"],
        [7, "Siedem Dolarów i Zero Centów"],
        [11.99, "Jedenaście Dolarów i Dziewięćdziesiąt Dziewięć Centów"],
        [106.47, "Sto Sześć Dolarów i Czterdzieści Siedem Centów"],
        [786.56, "Siedemset Osiemdziesiąt Sześć Dolarów i Pięćdziesiąt Sześć Centów"],
        [1042, "Jeden Tysiąc Czterdzieści Dwa Dolary i Zero Centów"],
        [1055.0, "Jeden Tysiąc Pięćdziesiąt Pięć Dolarów i Zero Centów"],
        [7786.49, "Siedem Tysięcy Siedemset Osiemdziesiąt Sześć Dolarów i Czterdzieści Dziewięć Centów"],
        [18166.56, "Osiemnaście Tysięcy Sto Sześćdziesiąt Sześć Dolarów i Pięćdziesiąt Sześć Centów"],
        [667842.71, "Sześćset Sześćdziesiąt Siedem Tysięcy Osiemset Czterdzieści Dwa Dolary i Siedemdziesiąt Jeden Centów"],
        [1004256.99, "Jeden Milion Cztery Tysiące Dwieście Pięćdziesiąt Sześć Dolarów i Dziewięćdziesiąt Dziewięć Centów"],
        [9999999.99, "Dziewięć Milionów Dziewięćset Dziewięćdziesiąt Dziewięć Tysięcy Dziewięćset Dziewięćdziesiąt Dziewięć Dolarów i Dziewięćdziesiąt Dziewięć Centów"],
        [440096212.87, "Czterysta Czterdzieści Milionów Dziewięćdziesiąt Sześć Tysięcy Dwieście Dwanaście Dolarów i Osiemdziesiąt Siedem Centów"],
        [1000000000.0, "Jeden Miliard Dolarów i Zero Centów"],
        [44123001000.48, "Czterdzieści Cztery Miliardy Sto Dwadzieścia Trzy Miliony Jeden Tysiąc Dolarów i Czterdzieści Osiem Centów"],
        [3677000000010, "Trzy Biliony Sześćset Siedemdziesiąt Siedem Miliardów Dziesięć Dolarów i Zero Centów"],
      ]),
    },
    PLN: {
      enUS: new Map<number, string>([
        [0, "Zero Zlotys and Zero Groszys"],
        [0.0, "Zero Zlotys and Zero Groszys"],
        [1, "One Zloty and Zero Groszys"],
        [2.32, "Two Zlotys and Thirty-Two Groszys"],
        [5.01, "Five Zlotys and One Grosz"],
        [7, "Seven Zlotys and Zero Groszys"],
        [11.99, "Eleven Zlotys and Ninety-Nine Groszys"],
        [106.47, "One Hundred Six Zlotys and Forty-Seven Groszys"],
        [786.56, "Seven Hundred Eighty-Six Zlotys and Fifty-Six Groszys"],
        [1042, "One Thousand Forty-Two Zlotys and Zero Groszys"],
        [1055.0, "One Thousand Fifty-Five Zlotys and Zero Groszys"],
        [7786.49, "Seven Thousand Seven Hundred Eighty-Six Zlotys and Forty-Nine Groszys"],
        [18166.56, "Eighteen Thousand One Hundred Sixty-Six Zlotys and Fifty-Six Groszys"],
        [667842.71, "Six Hundred Sixty-Seven Thousand Eight Hundred Forty-Two Zlotys and Seventy-One Groszys"],
        [1004256.99, "One Million Four Thousand Two Hundred Fifty-Six Zlotys and Ninety-Nine Groszys"],
        [9999999.99, "Nine Million Nine Hundred Ninety-Nine Thousand Nine Hundred Ninety-Nine Zlotys and Ninety-Nine Groszys"],
        [440096212.87, "Four Hundred Forty Million Ninety-Six Thousand Two Hundred Twelve Zlotys and Eighty-Seven Groszys"],
        [1000000000.0, "One Billion Zlotys and Zero Groszys"],
        [44123001000.48, "Forty-Four Billion One Hundred Twenty-Three Million One Thousand Zlotys and Forty-Eight Groszys"],
        [3677000000010, "Three Trillion Six Hundred Seventy-Seven Billion Ten Zlotys and Zero Groszys"],
      ]),
      plPL: new Map<number, string>([
        [0, "Zero Złotych i Zero Groszy"],
        [0.0, "Zero Złotych i Zero Groszy"],
        [1, "Jeden Złoty i Zero Groszy"],
        [2.32, "Dwa Złote i Trzydzieści Dwa Grosze"],
        [5.01, "Pięć Złotych i Jeden Grosz"],
        [7, "Siedem Złotych i Zero Groszy"],
        [11.99, "Jedenaście Złotych i Dziewięćdziesiąt Dziewięć Groszy"],
        [106.47, "Sto Sześć Złotych i Czterdzieści Siedem Groszy"],
        [786.56, "Siedemset Osiemdziesiąt Sześć Złotych i Pięćdziesiąt Sześć Groszy"],
        [1042, "Jeden Tysiąc Czterdzieści Dwa Złote i Zero Groszy"],
        [1055.0, "Jeden Tysiąc Pięćdziesiąt Pięć Złotych i Zero Groszy"],
        [7786.49, "Siedem Tysięcy Siedemset Osiemdziesiąt Sześć Złotych i Czterdzieści Dziewięć Groszy"],
        [18166.56, "Osiemnaście Tysięcy Sto Sześćdziesiąt Sześć Złotych i Pięćdziesiąt Sześć Groszy"],
        [667842.71, "Sześćset Sześćdziesiąt Siedem Tysięcy Osiemset Czterdzieści Dwa Złote i Siedemdziesiąt Jeden Groszy"],
        [1004256.99, "Jeden Milion Cztery Tysiące Dwieście Pięćdziesiąt Sześć Złotych i Dziewięćdziesiąt Dziewięć Groszy"],
        [9999999.99, "Dziewięć Milionów Dziewięćset Dziewięćdziesiąt Dziewięć Tysięcy Dziewięćset Dziewięćdziesiąt Dziewięć Złotych i Dziewięćdziesiąt Dziewięć Groszy"],
        [440096212.87, "Czterysta Czterdzieści Milionów Dziewięćdziesiąt Sześć Tysięcy Dwieście Dwanaście Złotych i Osiemdziesiąt Siedem Groszy"],
        [1000000000.0, "Jeden Miliard Złotych i Zero Groszy"],
        [44123001000.48, "Czterdzieści Cztery Miliardy Sto Dwadzieścia Trzy Miliony Jeden Tysiąc Złotych i Czterdzieści Osiem Groszy"],
        [3677000000010, "Trzy Biliony Sześćset Siedemdziesiąt Siedem Miliardów Dziesięć Złotych i Zero Groszy"],
      ]),
    },
  },
};

export default localeMaps;
