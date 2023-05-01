# Siddhant Bansal's Website

This is the source code for Siddhant Bansal's website [hosted at GitHub Pages](https://zalarox.github.io/).

## Tech stack

The project is built mainly on React since it is meant to house various hobby projects built on it. Testing would be with React Testing Library (Jest as a test runner). Package management is done using `pnpm`.

## CI/CD

The pipeline is managed using GitHub Actions. It builds the project using `pnpm` and deploys it to GitHub Pages after creating and uploading an artifact. The pipeline is triggered on pull requests and direct pushes to the `main` branch.
