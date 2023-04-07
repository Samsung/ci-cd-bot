# ci-cd-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that is a CI/CD bot which can be integrated with GitHub (public as well as enterprise) with ease and flexibility

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t ci-cd-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> ci-cd-bot
```

## Contributing

If you have suggestions for how ci-cd-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[Apache-2.0](LICENSE) © 2022 Ayush Patel <patel.ayush08@gmail.com>
