# Understanding the Differences Between Interface and Type in TypeScript

When building applications with TypeScript, you will often encounter two similar-looking features: `interface` and `type`. Both are used to describe the shape of data, but they are not exactly the same. In this blog post, we’ll explore the key differences between them, and when to use which.

---

## What is an Interface?

An `interface` is used to define the structure of an object. It's a way to enforce that certain properties and types exist on an object.

```ts
interface User {
  name: string;
  age: number;
}# Understanding the Differences Between Interface and Type in TypeScript

When building applications with TypeScript, you will often encounter two similar-looking features: `interface` and `type`. Both are used to describe the shape of data, but they are not exactly the same. In this blog post, we’ll explore the key differences between them, and when to use which.

---

## What is an Interface?

An `interface` is used to define the structure of an object. It's a way to enforce that certain properties and types exist on an object.

```ts
interface User {
  name: string;
  age: number;
}