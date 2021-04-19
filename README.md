# TypeScript
This is an extension (or a superset) of javascript. It offers more safety that js doesn’t have. 
- You’ll be able to see errors in the transpilant phase which means that you can caught on to them sooner than later, (this does not mean we don’t see errors in runtime)
- It helps us work with entities, (It seems like you’re able to create classes better or objects)
- ts needs to be transpiled in js (browsers don’t support ts)

## Starting out
1. You can create a file with the extension `.ts`
2. You can start writing your code in that file
3. You need to compile the code in the console, you can do that by running `tsc {filename}`
4. A neat thing that you could do it append the command above with `-w` and now it will be watching that file for whenever you save (this feels a lot like using nodemon)

## tsconfig.json
Above I talked about how you can compile a .ts file into a js file but instead of doing that for every single file that you will have you can actually create a `tsconfig.json` file and set up the `rootDir` and `outDir` and now you can just run `tsc -w` in the console and every file that is in the `src` dir will be compiled and made into the `dist` dir. 

**This is shown in the folder structure**

## Data types
To declare variables in ts, you will do the same as in js. You can create variables with const, var, let.

### Const
If you declare a variable with const and hover your cursor over the variable name you will see a popup that says that the variable is the `type` of whatever value you set it equal to. 

`const hello = 'world'` You will not see that the type of hello is a string but instead ‘world’ because it is a constant variable. 

### Let
Just like in js you are able to change the value of let-defined variables. Now if you were to have a variable declared with let and it is equal to a string, you will see that the variable is a type string unlike what would happen if you were to use a const-defined variable.

`let hi = 'there'` the type of hi is a string not ‘there’.

You can change the values of let-defined variable but in ts you can only change it if it is the same data type.

`hi = 500` this will not work because we are trying to reassign the data type. After you create a variable in ts, that data type will remain and be consistent.

### Functions 
Just like how we can assign types to variables you can also assign them to the parameters that will be passed into the fn and you can also assign the type that the fn will return. 

## Interfaces
Imagine a scenario where you’re defining a an object that needs to have two properties. You can actually declare the types of the properties for that object, this will ensure that if you are creating multiple instances of the same object then it will need to have those properties and types

This is where ts becomes difficult because you need to begin your project with some sort of architecture in mind, once you have figured this out, this will help you be able to have ‘safer’ less buggy code because when we are writing our code, we are anticipating what we need to return and pass, etc. 

```
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Tony',
  age: 24,
};

const user2: User = {
  name: 'Tyler',
};
```
You will get an error that user2 is missing the age attribute. If you wish to make age not mandatory, do this: add a ‘?’ Before the colon in the interface. `age?: number`

Another advantage of using interfaces is that you will have access to autocomplete that could help catch issues prior to them happening. 

### Class & Interface
You may want to use classes in ts and the way to declare it is really similar, instead of using the reserved word ‘interface’ you will use the word ‘class’. If you have a User class and User interface, there will be name collision here. It is best to change the interface User to UserInterface / IUser