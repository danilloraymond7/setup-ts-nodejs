# Setup-ts-nodejs

This repository provides a streamlined setup for a TypeScript Node.js project, making development and deployment more efficient. 

## Features

- **TypeScript Support**: Utilize the power of TypeScript for static typing and better code organization.
- **Hot Reloading**: Enable automatic reloading during development with the `start:dev` script.
- **Efficient Builds**: Build your project with minimal configuration using `tsup`.
- **Commit Conventions**: Maintain a consistent commit message format with `commitizen` and `cz-conventional-changelog`.
- **Git Hooks**: Ensure code quality and consistency with pre-commit hooks powered by `husky`.
  
## Installation

To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/setup-ts-nodejs.git
cd setup-ts-nodejs
npm install
```

## Usage

### Development

Run the development server with hot reloading:

```bash
npm run start:dev
```

### Production Build

Generate a production-ready build:

```bash
npm run build
```

### Committing Changes

Commit your changes using the provided `git-commit` script:

```bash
npm run git-commit
```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

[Your Name](https://github.com/danilloraymond7)

Feel free to customize this setup according to your project's specific requirements and contribute to the open-source community!