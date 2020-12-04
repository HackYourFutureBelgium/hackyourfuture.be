# Hack Your Future Belgium

## Running locally

```
git clone git@github.com:HackYourFutureBelgium/hackyourfuture.be
npm install
npm start
```

## Update

*Application form link ("Apply now" button)*

- Update website header: [`src/components/navigation/top-nav/TopNav.jsx` (line 29)](src/components/navigation/top-nav/TopNav.jsx#L29)
- Update program page: [`src/components/page-sections/program-header/ProgramHeader.jsx` (line 17)](src/components/page-sections/program-header/ProgramHeader.jsx#L17)

*Partners logo*

- Upload partner logo: [`src/assets/partners/`](src/assets/partners/)
- Update homepage: [`src/components/page-sections/our-partners/OurPartners.jsx`](src/components/page-sections/our-partners/OurPartners.jsx)
  - Copy [line 11](src/components/page-sections/our-partners/OurPartners.jsx#L11) and fix file path + variable name
  - Copy [line 24](src/components/page-sections/our-partners/OurPartners.jsx#L24) and fix variable name
  
*Success stories*

- Upload picture: [`src/assets/alumni/`](src/assets/alumni/)
- Update homepage: [`src/components/page-sections/success-stories/SuccessStories.jsx`](src/components/page-sections/success-stories/SuccessStories.jsx)
  - Copy [line 14](src/components/page-sections/success-stories/SuccessStories.jsx#L14) and fix file path + variable name
  - Copy [lines 55 to 62](src/components/page-sections/success-stories/SuccessStories.jsx#L55-L62) and fix variable name + content

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
