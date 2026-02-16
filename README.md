## 1 What is the difference between null and undefined?
answer: null means the variable is declared, but it’s intentionally empty (assigned no value).
and undefined means the variable is declared but not assigned a value yet.
## 2  What is the use of the map() function in JavaScript? How is it different from forEach()?
answer: Both map() and forEach() are used for looping through an array in JavaScript. However, they are used for different purposes.

We use map() when we need to return something from each iteration. The map() method always returns a new array. If the original array is empty, map() will also return an empty array. It is mainly used when we want to transform data and store the result in a new array.

On the other hand, forEach() is used when we do not need to return anything. It does not return a new array; instead, it returns undefined. We mainly use forEach() when we just want to perform an action like printing values, updating the UI, or executing logic for each element.
## 3 What is the difference between == and ===?
answer: == checks only the value, while === checks both value and type.
## 4 What is the significance of async/await in fetching API data?
answer: async/await helps JavaScript wait for data from an API without stopping the whole program.

## 5 Explain the concept of Scope in JavaScript (Global, Function, Block).
answer: Scope in JavaScript means where a variable can be accessed.
 Global scope is accessible everywhere.
 Function scope is accessible only inside a function
Block scope is accessible only inside a block like {}.
