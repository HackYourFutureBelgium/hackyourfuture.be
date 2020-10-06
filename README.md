# Hack Your Future Belgium

## running locally

```
git clone git@github.com:HackYourFutureBelgium/hackyourfuture.be
npm install
npm start
```

## running the end-to-end tests in cypress (headless)

```
npm run test:e2e:headless
```

## running the end-to-end tests in a visible GUI

You might want to do this, for example, if there are some accessibility tests that are failing and you like to mess around with the particular elements in the page that are the issue

```
npm run test:e2e
```
