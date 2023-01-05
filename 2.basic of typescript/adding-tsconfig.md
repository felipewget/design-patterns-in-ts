Normally, it is best practice to create a tsconfig.json file in the base of your TypeScript 
source folder in your project.

So, create a new file called tsconfig.json in the ./src/ folder alongside the existing
test.ts

{
    "compilerOptions": {
        "strict": true,
        "target": "ES2015",
        "module": "CommonJS",
        "outDir": "../dist",
        "rootDir": "./",
        "moduleResolution": "node"
    },
    "exclude": ["./node_modules", ".nuxt", "dist"],
    "include": ["**/*.ts", "**/**/*.ts"]
}

https://sbcode.net/typescript/getting_started/

In summary, tsconfig.json is a file in root of path and you can use to 
put your config, when will be added the build and other things

for onventction, we put inside /src/

----

you can use 

tsc.cmd to build

tsc.cmd -p ./src/




"strict": true, // Envrionment is limited only in this envriromnentr
"target": "ES2015",// version of best praticess to JS to 2015
"module": "CommonJS", // is d module that will create out output, export
"outDir": "../dist", // dir of output
"rootDir": "./", // root dir
"moduleResolution": "node"

Docuemntation: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html