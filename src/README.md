# Understanding the Differences Between Interface and Type in TypeScript

In typeScript both interface and types define the shape of objects, but they have some key differences flexibilty and usages 
---

## What is an Interface?

An interface in typeScript is a way to define  the shape of an object its only works of an object


```bash
interface User {
  name: string;
  age: number;
};
const user:User={
name:'rojina';
age:23
}
console.log(user) // output {rojina,23}
```
## what is an type 
type is a keyword used to define custom types. It's a way to describe the shape or structure of data, making your code safer and easier to understand.

```bash
type User = {
  name: string;
  age: number;
};
const user:User={
name:'rojina';
age:23
}
console.log(user) // output {rojina,23}
```

 ## difference between interface and type 

| Feature                | `interface`                                | `type`                                                                 |
|------------------------|--------------------------------------------|------------------------------------------------------------------------|
| Flexibilty             | Less flexible compared to type.           | More flexible
| Extending (Inheritance)|  Can be extended by other interfaces      |  Can be extended using intersection (`&`)                            |
| Merging                |  Automatically merges if re-declared      |  Cannot be re-declared                                               |
| Union / Intersection   |  Not possible                             |  Yes (`type A = B \| C`)                                             |
| Tuples / Primitives    |  Cannot define tuples or primitives       |  Yes (`type Age = number`, `type Pair = [string, number]`)           |
| Implements in Classes  |  Yes                                      |  Yes                                                                 |
| Discriminated Unions   |  Not ideal                                |  Preferred                                                           |
## 2 What is the use of the keyof keyword in TypeScript? Provide an example

## the keyof keyword is used in typescript to extract in keys of the type as an union  of string literal types.. its used for safe access of type and manupulation object properties  It is particularly useful when working with generic types or when needing to ensure that a property name exists on a given type.


## Here is an example:
```bash
interface Person {
  name: string;
  age: number;
  city: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "city"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "rojina akter",
  age: 23,
  city: "bogura",
};

const personName = getProperty(person, "name"); // string
const personAge = getProperty(person, "age"); // number
// const personAddress = getProperty(person, "address"); // Error: Argument of type '"address"' is not assignable to parameter of type 'keyof Person'
```