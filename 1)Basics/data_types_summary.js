/*
Primitive Data Types in JavaScript:
1. Number: Represents both integer and floating-point numbers.
2. String: Represents a sequence of characters enclosed in quotes.
3. Boolean: Represents a logical entity and can have two values: true or false.
4. Undefined: A variable that has been declared but not assigned a value.
5. Null: Represents the intentional absence of any object value.
6. Symbol: A unique and immutable primitive value, often used as object property keys.
7. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
Non-Primitive Data Types in JavaScript:
1. Object: A collection of properties, which can include functions (methods).
2. Array: A special type of object used to store ordered collections of values.     
3. Function: A callable object that can be executed, often used to encapsulate reusable code.
4. Date: An object that represents a single moment in time, useful for date and time manipulation.
5. RegExp: An object that represents a regular expression, used for pattern matching in strings.
6. Map: A collection of keyed data items, similar to an object but with keys of any type.
7. Set: A collection of unique values, where each value can only occur once.
*/
const dataTypesSummary = {
  primitive: {
    number: "Represents both integer and floating-point numbers.",
    string: "Represents a sequence of characters enclosed in quotes.",
    boolean: "Represents a logical entity with two values: true or false.",
    undefined: "A variable that has been declared but not assigned a value.",
    null: "Represents the intentional absence of any object value.",
    symbol: "A unique and immutable primitive value, often used as object property keys.",
    bigint: "Represents integers with arbitrary precision, useful for very large numbers."
  },
  nonPrimitive: {
    object: "A collection of properties, which can include functions (methods).",
    array: "A special type of object used to store ordered collections of values.",
    function: "A callable object that can be executed, encapsulating reusable code.",
    date: "An object representing a single moment in time, useful for date and time manipulation.",
    regexp: "An object representing a regular expression for pattern matching in strings.",
    map: "A collection of keyed data items, similar to an object but with keys of any type.",
    set: "A collection of unique values, where each value can only occur once."
  }
};
/*
stack and heap
Stack:
- Memory structure for static memory allocation.
- Stores primitive data types and references to objects.
- Fast access and management.
- Memory is automatically managed (LIFO - Last In, First Out).
Heap:
- Memory structure for dynamic memory allocation.
- Stores objects and complex data types.
- Slower access compared to stack.
- Memory management is manual (garbage collection).
- Used for larger data structures and objects.
Stack is used for function calls and local variables, while heap is used for objects and arrays.
*/