# Union and Intersection Types in TypeScript

## Introduction

TypeScript-এ Union (`|`) এবং Intersection (`&`) Types ব্যবহার করে একাধিক type
নিয়ে কাজ করা যায়। Union ব্যবহার করে একাধিক type-এর মধ্যে যেকোনো একটি গ্রহণ করা
যায়। অন্যদিকে, Intersection ব্যবহার করে একাধিক type একসাথে যুক্ত করে একটি নতুন
type তৈরি করা যায়। এগুলো কোডকে আরও flexible এবং type-safe করতে সাহায্য করে।

## Union and Intersection

- **`Union (|)`**: একাধিক type-এর মধ্যে যেকোনো একটি ব্যবহার করতে দেয়।
- **`Intersection (&)`**: একাধিক type একসাথে যুক্ত করে নতুন type তৈরি করে।

## Practical Code Example

```typescript
type User = {
  name: string;
  email: string;
};

type Admin = User & {
  role: 'admin';
  permissions: string[];
};

type Customer = User & {
  role: 'customer';
  purchaseCount: number;
};

type Account = Admin | Customer;

const user1: Account = {
  name: 'Mahadi',
  email: 'mahadi@gmail.com',
  role: 'admin',
  permissions: ['add', 'delete'],
};

const user2: Account = {
  name: 'Hasan',
  email: 'hasan@gmail.com',
  role: 'customer',
  purchaseCount: 5,
};
```

### Code Explanation

এখানে `User` type-এর সাথে `Admin` এবং `Customer` type যুক্ত করতে
`Intersection (&)` ব্যবহার করা হয়েছে। ফলে দুটো type-ই `User`-এর property
পেয়েছে এবং নিজেদের আলাদা property যুক্ত করেছে। অন্যদিকে `Union (|)` ব্যবহার করে
`Account` তৈরি করা হয়েছে, যেখানে একজন user `Admin` অথবা `Customer` যেকোনো একটি
হতে পারবে।

## Conclusion

Union (`|`) ব্যবহার করে একাধিক type-এর মধ্যে যেকোনো একটি এবং Intersection (`&`)
ব্যবহার করে একাধিক type একসাথে যুক্ত করা যায়। এগুলো ব্যবহার করলে code আরও
flexible এবং type-safe হয়।
