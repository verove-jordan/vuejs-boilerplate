# Vue.js Docker Boilerplate

A robust and scalable Vue.js boilerplate optimized to run seamlessly inside a Docker container, orchestrated by Docker Compose. This project serves as a solid foundation for building modern Vue.js applications with streamlined development and deployment processes using Vite and Tailwind CSS.

## Requirements

To run this project, ensure you have the following installed:

- Docker (24.0.6)
- Docker Compose (2.20.2)
- Makefile
- Devcontainer extension in VSCode

## Running the Project

To start the development containers, use:

```bash
make start-dev
```

To rebuild the containers, use:

```bash
make rebuild-dev
```

To stop the containers, use:

```bash
make stop-dev
```

To restart the containers, use:

```bash
make restart-dev
```

## Accessing the Application

The website is exposed at [http://localhost:3000](http://localhost:3000).