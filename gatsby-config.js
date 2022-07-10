module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    // description: "Hello Gatsby",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "gatsbyblog",
        apis: [
          {
            endpoint: "post",
          },
          {
            endpoint: "category",
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: `https://qiita.com/mottox2/feed`,
    //     name: `Qiita`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: "works",
    //     path: `${__dirname}/src/works.yaml`,
    //   },
    // },
    // "gatsby-transformer-yaml",
  ],
};
