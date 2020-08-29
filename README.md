# TS-Backend

This is an attempt at making a typescript template for rapid prototyping. This is mostly intended for personal projects and thus the scope might be rather restricted to a backend HTTP API server because that's the preferrence of the author. 

## Development Tools

### Docker
We can use docker to set up a temporary database on our local machines for testing purposes. This reduces the need to download the database driver on your local machine. In this project, we are using postgresql as our database. 

We can run this to set up the docker container. 

```npm run pg:create```

We can run this to stop the docker container. 

```npm run pg:stop```

Of course, this would require you to have docker already install on your local machine. 

More details on how to use docker in the folder `docker/`.

### Nodemon

We can run the following for live reload of code. 

```npm run dev```

Related files: `nodemon.json`

### Linter

For a more cleaner codebase, we are using ESLint to clean up the code. The following command will attempt to fix the code according to the linter rules.

```npm run fix-lint```

Related files: `.eslintrc.json`, `.eslintignore`

Reference: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

## Build

We can run the following to create our `.js` files in `dist/`.

```npm run build``` 

## Considerations

There are some tools/concepts that may be considered, but has not been/will not be implemented:

- Prettier (for live linting) https://khalilstemmler.com/blogs/tooling/prettier/
- Docker (dockerized database)
- Source map (under `tsconfig.json`)
