Interfaces in TypeScript are a useful tool that you can use for your classes to ensure that they conform to any specific rules that you want them to. This is especially useful if there are many people working on the same code base, and any classes need to follow any specific rules.

interface IAnimal {
    name: string
    age: number

    feed(food: string, amount: number): void
}

class Cat implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

use IAnimal <-