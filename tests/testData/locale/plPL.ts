const plPL = {
  parseAmountToWords: new Map<number, string>([
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
  concatParsedValues: {
    USD: new Map<number, string>([
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
    PLN: new Map<number, string>([
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
};

export { plPL };
