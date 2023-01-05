"use strict";
let string;
string = 'ABC';
string = '123';
string = 'ABC = 123';
string = 'quick brown fox, etc';
string = "It wasn't me";
string = `aaaaaa ${string} string`;
let bar;
bar = true;
bar = false;
console.log(string == "aaaaa");
let numberE;
numberE = 123; //decimal
numberE = 123.456; //float
numberE = 0xffff; //hex
numberE = 0b10101; //binary
numberE = 0o671; //octal
let a;
a = ['a', 'b', 'd', 'd'];
let b;
b = [1, 2, 3, 4];
let c;
c = [true, false, true];
let d;
d = [1, 'a', true, ['even', 'another', 'internal', 'array']];
// Array items can be retrieved using a zero based index.
console.log(a[1]);
console.log(b[0]);
console.log(c[1]);
console.log(d[2]);
let dictionaryA;
dictionaryA = { 123: 'abc', 456: 'def' };
let dictionaryB;
dictionaryB = { abc: true, def: false, ghi: true };
console.log(dictionaryA[123]);
console.log(dictionaryB['def']);
//let trupleA: [number, string]
let trupleA;
trupleA = [1, 'abc'];
let trupleB;
trupleB = ['abc', false, 123];
console.log(trupleA[1]);
console.log(trupleB[2]);
let setA;
setA = new Set([1, 2, 3, 4]);
let setB;
setB = new Set(['a', 'b', 'c', 'd', 'a']); // the second `a` is not added
let setC;
setC = new Set([1, 'b', true]);
console.log(setA);
console.log(setB);
