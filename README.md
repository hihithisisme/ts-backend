# ts-backend

This is an attempt at making a typescript template for rapid prototyping. This is mostly intended for personal projects and thus the scope might be rather restricted to a backend HTTP API server because that's the preferrence of the author. 

## Development

This project is made with long-term development in mind. As such it has a suite of dev tools in which you can use to make your process easier. You can find short write-ups of these tools employed in `dev-tools.md`. 

## Quickstart

### Mock Database using Docker
`npm install`
`npm run pg:build` (This step requires Docker to be installed. Otherwise you will have to set up a postgres database instance yourself and configure the `.env` yourself.)
`npm run pg:create-tables`

### Environment variables
Copy `.env.example` into `.env`. The configuration in `.env.example` should suffice for local development and testing while using the Docker containers. 

### Live reload
`npm run dev`

## Considerations

There are some tools/concepts that may be considered, but has not been/will not be implemented:

- Prettier (for live linting) https://khalilstemmler.com/blogs/tooling/prettier/
- Editorconfig
- Source map (under `tsconfig.json`)
