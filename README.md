# radical-insight

## Setup

### Prerequisites

- Node.js version 16.x.x (LTS)
- NPM version 8.x.x
- Docker (optional, for local MongoDB instance)

### Install

1. Clone this repository.
2. Run the below command to install dependencies.

   ```sh
   cd radical-insight && npm install
   ```

## Navigating the repo

This project uses Nx to manage multiple interdependent packages and applications. Most code will be written in either the `/apps` or `/libs` directories, with `/tools` coming in third place.

### /apps

This is where deployable applications live. Api, clients, etc.

### /libs

Here is shared code like Typescript types, reusable functions, and React components.

### /tools

This is where helper scripts for repository management belong.

## Running applications

Nx commands are used to build/serve/test the various applications and libraries. You may typically use the following format to run a single application:

```sh
npx nx {appName} {appName}:{serve|test|lint}
```

For example, to execute the `libs/common` unit tests, run:

```sh
npx nx common common:test
```

Many Nx commands have also been wrapped inside npm scripts for the sake of convenience. See `npm run` for a full list of available npm scripts.

## Additional notes

The idea behind _Radical Insight_ is to build out a broad platform for mood tracking that will meet users wherever they are. In the future, we hope to include integrations with email and SMS providers, native mobile clients, and potentially much more.
