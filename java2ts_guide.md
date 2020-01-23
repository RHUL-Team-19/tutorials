A small guide that compares the syntax from Java to Typescript along with some basics.

# Logging
```diff
- System.out.println("foo");
+ console.log('foo');

- System.err.println("err");
+ console.error('err');
```
There are also a bunch of other methods on the console which you can view over on the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Console).

# Declerations
```diff
- String foo = "bar";
+ const foo = 'bar';
```

Variabels declared with the [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) keyword can't be redelcared/assigned (you can think of it as Java's `final`), if you wish to do so you can use [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) instead.

```ts
let foo = 'bar';
foo = 'baz';

let counter = 0;
counter++;
```

# String concatenation

You may find yourself having to concat a string with a variable and for this we can make use of [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```diff
- String bar = "bar";
- String fooBar = foo + " " + bar;
+ const bar = 'bar';
+ const fooBar = `${foo} ${bar}`; // 'foo bar'
```
You could also do `const fooBar = foo + ' ' + bar;` which would result in the same thing.

# Arrays

```diff 
- List<String> stringArr = new ArrayList<>();
- stringArr.add("foo");
- stringArr.get(0);
+ const stringArr = ['foo'];
+ stringArr[0];
```

You can read more about arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Interfaces

```ts
interface Jim {
  height: number;
  surname: string;
}
const jim: Jim = {
    height: 7777777777,
    surname: 'bob'
};
```
Keep in mind that this is a TS feature and doesn't work in pure JS. The `: Jim` part is simply just casting the variable `jim` as the type `Jim`, here's how that compares with Java
```diff
- float foo = 1;
+ const foo: number = 1;
```
TS can usually automatically infer the types so having the `: number` isn't really necessary. You may have also noticed that `number` was used instead of a `float`, you can view a list of all types [here](https://www.typescriptlang.org/docs/handbook/basic-types.html#table-of-contents).


# Functions
Unlike Java your functions doesn't have to be within a class, you do everything above standalone. You will often find yourself making functions and here's how:
```diff
- public void output(String thing) {
-   System.out.println(thing);
- }
+ function foo(thing: string) {
+   console.log(thing);
+ }
```
Or you can use an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) which is pretty much syntantic sugar for the above (there are some differences but you don't need to worry about that for now).
```ts
const foo = (thing: string) => console.log(thing);
```

# Union types
This is pretty much a way to say "this should be either X or Y".
```diff
- public void output(String thing) {
-   System.out.println(thing);
- }
- public void output(int n) {
-   System.out.println(n);
- }
+ const foo = (thing: string | number) => console.log(thing);
```

# For loops
```diff
- for (int i = 0; i < 3; i++) {}
+ for (let i = 0; i < 3; i++) {}

- for (String thing : stringArr) {}
+ for (const thing of stringArr) {}
```
You can also make use of [Array#forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) for iterating over an array, where you can pass an arrow function.

```ts
const arr = [1, 2, 3];
arr.forEach(n => console.log(n)); // outputs 1 then 2 then 3
```
There are lots of useful methods like the one above which you can view on the docs.

# Classes
[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) are very similar compared to Java.
```diff
- public class Foo {
-   public String bar;
-   public Foo(String baz) {
-       bar = baz;
-   }
-   public void outputBar() {
-       System.out.println(bar);
-   }
- }
+ class Foo {
+   public string bar;
+   public constructor(baz: string) {
+       bar = baz;
+   }
+   public outputBar() {
+       console.log(bar);
+   }
+ }
```
The most noticeable difference is the [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor). Just like in Java you can use [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) and `implements` (which can be done on an interface).

```ts
interface Thingable {
  public thing(): boolean;
}
class Thing implements Thingable {
    public thing(): boolean {
        return true;
    }
}
```