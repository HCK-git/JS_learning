"use strict";

const string = "String with some interesting information";

console.log(string.indexOf("information"));

const logg = "important information";

console.log(logg.slice(logg.indexOf(" ") + 1, logg.length));

console.log(logg.substr());

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(typeof(parseFloat(test)));