# Hack Your Future Belgium

## Running locally

```
git clone git@github.com:HackYourFutureBelgium/hackyourfuture.be
npm install
npm start
```

## Developing on the project

### Launch the website in watch mode

```
npm dev
```

### Launch the UI kit in watch more (Storybook)

```
npm dev:sb
```

## End-to-end tests

### Running the end-to-end tests in cypress (headless)

```
npm run test:e2e:headless
```

### Running the end-to-end tests in a visible GUI

You might want to do this, for example, if there are some accessibility tests that are failing and you like to mess around with the particular elements in the page that are the issue

```
npm run test:e2e
```

