const tailwind = require('tailwindcss')

module.exports = {
  siteMetadata: {
    title: `Lilypad Nebula`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-layout',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [tailwind('./tailwind.js'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/asset_logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
