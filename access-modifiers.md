# Access Modifiers in TypeScript OOP

## Introduction

TypeScript-এ অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP)-এ Access Modifiers (`public`,
`private`, `protected`, এবং `readonly`) ব্যবহার করে ক্লাসের property ও method
কোথা থেকে অ্যাক্সেস বা পরিবর্তন করা যাবে তা নিয়ন্ত্রণ করা হয়। এগুলো ক্লাসের
ডেটা সুরক্ষিত রাখতে এবং কোডকে আরও সুন্দর ও নিয়ন্ত্রিতভাবে লিখতে সাহায্য করে।
প্রতিটি modifier-এর কাজ আলাদা, যা class এবং child class-এর মধ্যে ডেটা ব্যবহারের
নিয়ম নির্ধারণ করে।

## Modifiers

- **`public`**: যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়। বাই-ডিফল্ট ক্লাসের
  মেম্বার পাবলিক থাকে।
- **`private`**: শুধু নির্দিষ্ট ওই ক্লাসের ভেতর থেকেই অ্যাক্সেসযোগ্য।
- **`protected`**: নিজস্ব ক্লাস এবং তার চাইল্ড ক্লাসে অ্যাক্সেস করা যায়।
- **`readonly`**: মান একবার সেট করার পর আর পরিবর্তন করা যায় না।

## Practical Code Example

```typescript
class Product {
  constructor(
    public name: string,
    private price: number,
    protected category: string,
    readonly stock: number,
  ) {}
}

const product = new Product('iPhone 15', 1200, 'Electronics', 50);

console.log(product.name);
console.log(product.stock);
// console.log(product.price);    //! Error (Private)
// console.log(product.category); //! Error (Protected)
// product.stock = 34;            //! Error (read only)

class Phone extends Product {
  constructor(name: string, price: number, category: string, stock: number) {
    super(name, price, category, stock);
    console.log(this.category); // protected হওয়াতে চাইল্ড ক্লাসের ভেতরে ব্যবহার করা যাচ্ছে
  }
}

const myPhone = new Phone('Samsung S24', 1000, 'Mobile', 20);
```

### Code Explanation

এই কোডে constructor-এর মধ্যে access modifier ব্যবহার করে property তৈরি ও value
set করা হয়েছে। `public` বাইরে থেকে access করা যায়, `private` শুধু নিজের
class-এর মধ্যে এবং `protected` parent ও child class-এর মধ্যে ব্যবহার করা যায়।
`readonly` property-এর value শুধু পড়া যায়, পরিবর্তন করা যায় না। `Phone` class
হলো `Product`-এর child class। তাই `super()` দিয়ে parent constructor call করার
পর `protected category` ব্যবহার করা যাচ্ছে, কিন্তু `private price` ব্যবহার করা
যাচ্ছে না।

## Conclusion

Access Modifiers কোডের নিরাপত্তা নিশ্চিত করে। private ও protected ব্যবহারের
মাধ্যমে অনাকাঙ্ক্ষিত পরিবর্তন vs code error দেখায়, যা ডেভেলপারকে সঠিক code লিখতে
সাহায্য করে ।
