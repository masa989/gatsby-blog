
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/shigenomasamichi/react-gatsby/gatsby-blog/src/pages/404.js")),
  "component---src-pages-category-js": preferDefault(require("/Users/shigenomasamichi/react-gatsby/gatsby-blog/src/pages/category.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/shigenomasamichi/react-gatsby/gatsby-blog/src/pages/index.js")),
  "component---src-pages-post-js": preferDefault(require("/Users/shigenomasamichi/react-gatsby/gatsby-blog/src/pages/post.js")),
  "component---src-pages-posts-microcms-category-slug-js": preferDefault(require("/Users/shigenomasamichi/react-gatsby/gatsby-blog/src/pages/posts/{MicrocmsCategory.slug}.js")),
  "component---src-pages-posts-microcms-post-slug-js": preferDefault(require("/Users/shigenomasamichi/react-gatsby/gatsby-blog/src/pages/posts/{MicrocmsPost.slug}.js"))
}

