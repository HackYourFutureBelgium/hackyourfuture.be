const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/about.js"))),
  "component---src-pages-apply-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/apply.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/faq.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/index.js"))),
  "component---src-pages-program-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/program.js"))),
  "component---src-pages-support-us-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/support-us.js"))),
  "component---src-pages-volunteer-js": hot(preferDefault(require("/Users/kevintassi/Documents/project/hack-your-future-belgium/website/src/pages/volunteer.js")))
}

