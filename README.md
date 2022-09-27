# senv - Switch .env Files

Effortlessly switch between .env files using `senv <suffix>`. With no dependencies too.

## Installation

```bash
# Built on Node. Not Deno, sorry :(
npm install -g @neuronbutter/senv
pnpm install -g @neuronbutter/senv
yarn global add @neuronbutter/senv
```

## Usage

When using senv, the `.env` file is always assumed to be linked, and so senv will remove and replace it without prompting. **_Don't only keep your variables in `.env`, otherwise you'll risk losing them forever._**

By default, `dev` is the assumed suffix for a `.env` file.

For quiet operation, append the `-q` flag to the *end* of the command. Note that any error messages will still be printed.

### Examples

```bash
# Link .env to .env.prod
senv prod
```

```bash
# Link .env to .env.dev quietly
senv dev -q
```

## License

This code is licensed under the ISC license because that's npm's default. See `LICENSE` if you're bothered.

## Contributing and Issues

You're free to open an issue or PR. So there's that.

## About Me

Heyo 👋, my Github sits [here](https://github.com/NeuronButter), and my website's probably [here](https://neeron.dev) if it still exists.
