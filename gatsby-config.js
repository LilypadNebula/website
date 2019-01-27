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
        name: "Lily's Website",
        short_name: 'Lily',
        start_url: '/',
        background_color: '#674BB0',
        theme_color: '#674BB0',
        display: 'standalone',
        icon: 'src/images/asset_logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
