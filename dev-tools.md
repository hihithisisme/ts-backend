# Development Tools

## dotenv
One of the most popular dev tools is `dotenv`. This library is used to temporarily set up environment variables for your project on your local machine. These environment variables are typically sensitive information or variables that will be changed from device to device. 

In this repository, we are using the preloading implementation of `dotenv`, which require us to call our script commands with `-r dotenv/config`. 

Reference: https://github.com/motdotla/dotenv

## Docker
We can use docker to set up a temporary database on our local machines for testing purposes. This reduces the need to download the database driver on your local machine. In this project, we are using postgresql as our database. 

We can run this to set up the docker container. 
```npm run pg:create```
We can run this to stop the docker container. 
```npm run pg:stop```
Of course, this would require you to have docker already install on your local machine. 
More details on how to use docker in the folder `docker/`.

## Nodemon
We can run the following for live reload of code. 
```npm run dev```
Related files: `nodemon.json`

## Linter
For a more cleaner codebase, we are using ESLint to clean up the code. The following command will attempt to fix the code according to the linter rules.
```npm run lint:fix```
Related files: `.eslintrc.js`, `.eslintignore`, `tsconfig.json`, `tsconfig.eslint.json`

Reference: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

## Husky & lint-staged
What is the point of using linting if nobody uses it right? This is where git hooks come in. Husky help us to set a pre-commit hook which runs the linter on staged files (achieved by using lint-staged).

Reference: https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8#.8qepn2b5l
