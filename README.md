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