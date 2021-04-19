const a = '1';
console.log('aaa', a);

//DECLARING VARIABLES
// you are able to create variables the same way in js with var, let, const
const hello = 'world';

let hi = 'there';
hi = 'person';
// hi = 500; you are not able to do thing because 'hi' is a string type

let greeting: string = 'salutations';
greeting = 'bad salutations';
// greeting = false; this will not work.

// DECLARING FUNCTIONS
const getFullName = (first: string, last: string): string => {
  return `${first} ${last}`;
};

// getFullName(true, 500) you cannot do this because we assigned a type to our params.
