// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-category-js": () => import("./../../../src/pages/category.js" /* webpackChunkName: "component---src-pages-category-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-post-js": () => import("./../../../src/pages/post.js" /* webpackChunkName: "component---src-pages-post-js" */),
  "component---src-pages-posts-microcms-category-slug-js": () => import("./../../../src/pages/posts/{MicrocmsCategory.slug}.js" /* webpackChunkName: "component---src-pages-posts-microcms-category-slug-js" */),
  "component---src-pages-posts-microcms-post-slug-js": () => import("./../../../src/pages/posts/{MicrocmsPost.slug}.js" /* webpackChunkName: "component---src-pages-posts-microcms-post-slug-js" */),
  "component---src-pages-preview-js": () => import("./../../../src/pages/preview.js" /* webpackChunkName: "component---src-pages-preview-js" */)
}

