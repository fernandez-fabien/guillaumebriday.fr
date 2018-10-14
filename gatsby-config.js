const tailwindcss = require('tailwindcss')

module.exports = {
  siteMetadata: {
    title: `Guillaume Briday`,
    description: `Ce blog est à propos des nouvelles technologies, de mes humeurs, de développement Web, de photos... En bref, de tout ce dont j'ai envie de parler.`,
    siteUrl: `https://guillaumebriday.fr`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwindcss('./tailwind.js'),
          require('autoprefixer')
        ]
      },
    },
  ],
}
