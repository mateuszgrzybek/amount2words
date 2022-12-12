# amount2words

[![Tests](https://github.com/mateuszgrzybek/amount2words/actions/workflows/unit-tests.yml/badge.svg?branch=master)](https://github.com/mateuszgrzybek/amount2words/actions/workflows/unit-tests.yml) [![npm version](https://badge.fury.io/js/amount2words.svg)](https://badge.fury.io/js/amount2words)  

A simple library for parsing numeric values into words, written in TypeScript.

## Description

This library exposes two methods for parsing numeric values into strings of text. You can either use `parseValueToWords` to parse a single non-decimal value into words, or use the `parseDecimalValueToWords` function to parse decimal values, along with the supported currencies and locales.

**Currently supported currencies:**

- USD - US Dollars
- PLN - Polish Zloty

**Currently supported parsing locales:**

- enUS - American English
- plPL - Polish

## How to use

```js
// CommonJS module
const a2w = require("amount2words");

// ECMAScript Module
import a2w from "amount2words";

// parsing a single numeric value for given locale
const parsedValue = a2w.parseValueToWords("6794", "enUS");
// returns Six Thousand Seven Hundred Ninety-Four

// parsing decimal amount, with currency, for given locale
const parsedDecimalValue = const parsedValue = a2w.parseDecimalValueToWords(inputValue, "USD", "enUS");
// returns Three Hundred Thirty-Four Thousand Eight Hundred Seventy-Seven Dollars and Ninety-Nine Cents
```

## Accepted function parameters

```ts
type parseValueToWordsParams = {
  value?: string; // defaults to "0"
  parsingLocale?: string; // defaults to "enUS"
};

type parseDecimalValueToWordsParams = {
  amountToParse: string;
  currencySymbol: string;
  locale: string;
  toLowerCase?: boolean; // defaults to false
};
```

## Acknowledgments

Inspired by [Mohsen Alyafei's](https://github.com/MohsenAlyafei) [proposed StackOverflow solution](https://stackoverflow.com/questions/14766951/transform-numbers-to-words-in-lakh-crore-system/66078290#66078290).
