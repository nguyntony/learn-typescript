type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
  name: string;
  surname: string;
}

// union operator
let username: string = 'alex'; // username variable with type string

// assigning several datatypes for a single property
let pageName: string | number = '1'; // pageNumber variable will either be a string or number

let errorMessage: string | null = null; // if you don't assign the default value of null then it will be undefined

let person: UserInterface | null = null;

const popularTags: PopularTag[] = ['dragon', 'coffee'];
const dragonsTag: MaybePopularTag = 'dragon';

const doSomething = (): void => {
  console.log('do something?');
};

let vAny: any = 10;
let vUnknown: unknown = 10; // you can create variables that are unknown, you may not know the type yet.

let pageNumber: string = '1';
let numericPageNumber: number = (pageNumber as unknown) as number;
