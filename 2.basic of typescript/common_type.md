https://sbcode.net/typescript/common_types/

let foo: string  // string
let bar: boolean // boolean
let baz: number // number
let qux: string[] // array of string
let quuz: [number, string] // truple
let corge: { [key: number]: string } // dictionary
let grault: Set<number> // set

foo = 'ABC'
bar = true
baz = 123
qux = ['a', 'b', 'c']
quuz = [1, 'abc']
corge = { 123: 'abc', 456: 'def' }
grault = new Set([1, 2, 3])