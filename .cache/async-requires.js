// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-apply-js": () => import("./../src/pages/apply.js" /* webpackChunkName: "component---src-pages-apply-js" */),
  "component---src-pages-faq-js": () => import("./../src/pages/faq.js" /* webpackChunkName: "component---src-pages-faq-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-program-js": () => import("./../src/pages/program.js" /* webpackChunkName: "component---src-pages-program-js" */),
  "component---src-pages-support-us-js": () => import("./../src/pages/support-us.js" /* webpackChunkName: "component---src-pages-support-us-js" */),
  "component---src-pages-volunteer-js": () => import("./../src/pages/volunteer.js" /* webpackChunkName: "component---src-pages-volunteer-js" */)
}

