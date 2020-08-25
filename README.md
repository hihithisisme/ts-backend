# TS-Backend

This is an attempt at making a typescript template for rapid prototyping. This is mostly intended for personal projects and thus the scope might be rather restricted to a backend HTTP API server because that's the preferrence of the author. 

## Development Tools

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

We can run the following to build in `dist/`
```npm run build``` 

## Considerations

There are some tools/concepts that may be considered, but has not been/will not be implemented:
- Prettier (for live linting) https://khalilstemmler.com/blogs/tooling/prettier/
- Docker (dockerized database)
- Source map (under `tsconfig.json`)
