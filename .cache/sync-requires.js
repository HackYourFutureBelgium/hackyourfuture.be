const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/home/runner/work/website/website/src/pages/about.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/home/runner/work/website/website/src/pages/faq.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/runner/work/website/website/src/pages/index.js"))),
  "component---src-pages-program-js": hot(preferDefault(require("/home/runner/work/website/website/src/pages/program.js"))),
  "component---src-pages-support-us-js": hot(preferDefault(require("/home/runner/work/website/website/src/pages/support-us.js"))),
  "component---src-pages-volunteer-js": hot(preferDefault(require("/home/runner/work/website/website/src/pages/volunteer.js")))
}

