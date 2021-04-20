# TypeScript
Notes from [Stephen Grider’s Udemy](https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066368#overview) course.

## What is typescript?
You are essentially still writing JS and the knowledge that you have about it still applies to TS. The only thing that we are adding into our code is syntax to handle ‘the type system’

## Type system overview
- helps us catch errors during development 
- uses ‘type annotations’ to analyze our code
- only active during development
- doesn’t provide any performance optimization 

## Common process
1. Write TS code which is basically JS but with type annotations added in.
2. Feed our TS code to a TS compiler which is a command line tool
3. The compiler will spit out plain JS and this is what we are giving to the browser. 

## Interfaces
Interfaces are used to define the structure of an object. 