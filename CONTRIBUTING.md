# Contribution Guide

Please make sure you have gone through the [Code of Conduct](./CODE_OF_CONDUCT.md) and maintain a friendly environment.

## Have a question?

Have a question on how to use the library or a suggestion to improve anything, [create a discussion](https://github.com/anurag-roy/kiteconnect-ts/discussions/new/choose).

## Found a bug?

Something not working as expected like types not matching the actual response or something wrong with docs, feel free to [open an issue](https://github.com/anurag-roy/kiteconnect-ts/issues/new) detailing your problem.

## How to contribute

`pnpm` is used as the package manager of choice. Installation instructions can be found [here](https://pnpm.io/installation).

1. Fork the repository and clone it locally on your machine.
2. Install dependencies.

```
pnpm install
```

3. Make your change and commit it to your forked repo.
4. Make changes to the docs if necessary. Docs are generated from TsDoc comments and can be previewed by

```
pnpm docs:generate && pnpm docs:preview
```

5. Create a new changeset documenting your changes and commit the file.

```
pnpm changeset
```

6. Push your changes and you're ready to raise a PR!
7. Tag [me](https://github.com/anurag-roy) as a reviewer and I'll get your PR reviewed and merged.

Please try to keep PRs limited to a single area of change and try not to club multiple changes in a single PR.

---

:sparkles: Thanks for your contribution! It is highly appreciated.
